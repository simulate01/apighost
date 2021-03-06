<template>
  <div class="content">
    <div class="mock-helper">
      <div class="mock-word" v-for="word in normalizedMockWords">
        <el-button size="small" @click.native="insert(word.word)">{{word.desc}}</el-button>
      </div>
    </div>
    <div class="editor">
      <div class="econ" id="mockeditor">
      </div>
      <div class="error-hint">
        <p @click="jump2error(error.mark)" v-for="error in errorList">{{error.message}}</p>
      </div>
    </div>
    <div class="preview">
      <code-viewer :contents="jsonOutput" :ctype="'json'"></code-viewer>
    </div>
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .content
    display flex
    height 100%
    width 100%
    .mock-helper {
      width 100px
      overflow-y auto
      background-color: #002B36;
      /*------------滚动条样式修改------------*/
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-track-piece {
        background-color: rgba(0, 0, 0, 0);
        -webkit-border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb:vertical {
        height: 5px;
        background-color: rgba(125, 122, 122, 0.56);
        -webkit-border-radius: 6px;
      }

      .mock-word {
        margin-bottom 1px
      }
    }
    .editor
      height 100%
      flex 1
      display -webkit-box
      -webkit-box-orient vertical
      .error-hint {
        background-color: #002B36;
        p {
          &::before {
            display inline-block
            content '>>'
            margin-right 40px
            color #fff
            text-decoration none
          }
          margin 0
          color red
          text-decoration underline
          cursor pointer
          line-height 2
        }
      }

      .econ
        -webkit-box-flex 1
        width 100%
    .preview
      margin-left 20px;
      height 100%
      flex 1

</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import CodeViewer from 'src/components/CodeViewer'
  import ace from 'ace'
  import jsYaml from 'js-yaml'
  import editorSetting from 'src/assets/data/editorSetting.json'
  var Range = ace.require('ace/range').Range
  var langTools = ace.require('ace/ext/language_tools')
  var lodash = require('lodash')
  var Mock = require('mockjs')

  export default {
    mixins: [ BaseComponent ],
    name: 'MockEditer',
    components: { CodeViewer },
    props: {
      contents: {
        type: String,
        default: function () {
          return 'hello mock'
        }
      },
      mockWords: {
        type: Array,
        default: function () {
          return [ '@cword', '@url', '@email', '|10-100: 10', '|1: true', '|10: \'@cword\'', { '@date': '日期' } ]  // mock 关键字
        }
      }
    },
    data: function () {
      return {
        errorList: [],
//        defArr : ['definitions', 'path', 'description', 'parameters', 'type'],  // 定义trimDef方法的清理目标
        defArr: [],
        jsonOutput: '', // mocked data json
        mockOutput: '' // mocked schema obj
      }
    },
    editor: null,
    computed: {
      normalizedMockWords () {
        var arr = []
        for (let word of this.mockWords) {
          arr.push(toString.call(word) === toString.call({}) ? { word: Object.keys(word)[ 0 ], desc: word[ Object.keys(word)[ 0 ] || '' ] } : { word: word, desc: word }) // {word} cannot work here,cause word may start with `@`or`|`
        }
        return arr
      }
    },
    mounted () {
      this.$options.editor = ace.edit('mockeditor')
      langTools.addCompleter(this.genMockCompleter()) // 配置mock关键字自动完成
      this.$options.editor.setOptions((editorSetting.enableLiveAutocompletion = false, editorSetting))  // 因 `@` `|` 不能触发提示，禁用自动提示 转为由`afterExec`触发
      this.$options.editor.resize()
      this.$options.editor.$blockScrolling = Infinity
      this.$options.editor.setValue(this.pipe(this.contents, this.Yaml2MockedYaml)) // editor初始化
      // 触发提示
      this.$options.editor.commands.on('afterExec', e => {
        if (e.command.name == 'insertstring' && /^[@\w|]$/.test(e.args)) this.$options.editor.execCommand('startAutocomplete')
      })
      this.$options.editor.getSession().on('change', lodash.debounce(e => this.editorChange(e), 300))  // 监听editor内容变化 去抖
      this.editorChange()
    },
    methods: {
      // 对编辑器内容进行管道操作 注意异常捕获处理
      pipe () {
        var args = [].slice.call(arguments, 0)
        var val = args[ 0 ]
        for (let arg of args) {
          if (args.indexOf(arg) != 0 && typeof arg === 'function') val = arg(val)
        }
        return val
      },
      // 折叠以某key开头的代码块
      collapseLinesWithStartKey (key) {
        if (!key) return null
        var patern = new RegExp(key)
        var ops = { regExp: true }
        this.$options.editor.find(patern, ops)
        this.$options.editor.getSession().toggleFoldWidget()
      },
      // 标记错误
      markerError (e) {
        for (let error of this.errorList) {
          if (error.message == e.message) return
        }
        this.errorList.push(e)
      },
      // 清理错误
      clearError (e) {
        this.errorList = []
      },
      // 跳到错误行 参数 `mark` 为`jsYaml.YAMLException`实例的`mark`属性
      jump2error (mark) {
        this.$options.editor.moveCursorToPosition({ row: mark.line, column: mark.column })
        this.$options.editor.clearSelection()
        this.$options.editor.scrollToLine(mark.line, true, true)
      },
      // 在当前光标处插入文本
      insert (text) {
        this.$options.editor.insert(text)
      },
      // editor Change事件处理
      editorChange: function () {
        var content = this.$options.editor.getValue()
        try {
          this.mockOutput = this.pipe(content, this.faultTolerant, jsYaml.safeLoad, this.trimDef)
          this.jsonOutput = this.pipe(this.mockOutput, this.mock2Data, JSON.stringify)
          this.clearError()
        } catch (e) {
          console.error(e)
          if (e instanceof jsYaml.YAMLException) this.markerError(e)
        }
      },
      // 清理不需要的mock数据
      trimDef (input) {
        var defArr = this.defArr || []
        for (let def of defArr) {
          delete input[ def ]
        }
        return input
      },
      // Yaml => MockedYaml
      Yaml2MockedYaml (input) {
        var reg = /:\s*(string|int|number|bool|boolean)(?:\s*[|#]\s*(.+))?[\n\r]/mig
        var replacer = (m, p1, p2) => {
          // p1 pattern; p2 comment
          var count
          var val
          switch (p1) {
            case 'string':
              count = '5-10'
              val = '\'@cword\''
              break
            case 'int':
            case 'number':
              count = '10-100'
              val = '10'
              break
            case 'bool':
            case 'boolean':
              count = '1'
              val = 'true'
              break
          }
          return p2 ? `|${count}: ${val} # ${p2}\n` : `|${count}: ${val}\n`
        }
        return input.replace(reg, replacer)
      },
      // 容错
      faultTolerant (input) {
        // 容错属性值前面缺空格
        input = input.replace(/([\n\r]?)(.*)([\n\r]?)/gm, function (m, p1, p2, p3) {
          var s = p2.split(/:(?!\s)/)
          if (s.length >= 2) s[ 1 ] = s[ 0 ].indexOf(':') > -1 ? s[ 1 ] : ' ' + s[ 1 ]
          return p1 + s.join(':') + p3
        })
        input = input.replace(/['"]?(@\w+)['"]?/gm, '\'$1\'') // 容错mock占位符没转义
        return input
      },
      // mock配置 => mock输出
      mock2Data (input) {
        return Mock.mock(input)
      },
      // 生成MockCompleter
      genMockCompleter () {
        var mockWords = this.normalizedMockWords.map(word => word.word)
        return {
          getCompletions: function (editor, session, pos, prefix, callback) {
            var row = pos.row
            var col = pos.column - prefix.length
            var at = session.getTextRange(new Range(row, col - 1, row, col))
            var wordList = mockWords
            if (prefix.length !== 0) {
              wordList = mockWords.filter(meta => {
                var reg = new RegExp(prefix.split('').join('\\w*'))
                return reg.test(meta)
              })
            }
            var isAt = /^[@|]/.test(at)
            callback(null, wordList.map(function (word, index) {
              var isWordStartWithAt = isAt && new RegExp(`^${at}`).test(word)
              return {
                name: word,
                value: isWordStartWithAt ? word.replace(at, '') : word,
                score: isWordStartWithAt ? 1000 + index : 1000 - index,
                meta: 'mock'
              }
            }))
          }
        }
      }
    }
  }
</script>

