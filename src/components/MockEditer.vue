<template>
  <div class="content">
    <div class="editor">
      <div class="econ" id="editor">
      </div>
      <div class="error-hint">
        <template v-for="error in errorList">
          <el-alert :show-icon='true' :title="error.message" type="error" @click.native="jump2error(error.mark)"></el-alert>
        </template>
      </div>
    </div>
    <div class="preview">
      <code-viewer :contents="jsonContent" :ctype="'json'"></code-viewer>
    </div>
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .content
    display flex
    height 100%
    width 100%
    .editor
      height 100%
      flex 1
      .econ
        height 100%
        width 100%
    .preview
      padding 20px
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
  var lodash = require('lodash')
  var Mock = require('mockjs')
  window.Mock = Mock
  window.jsYaml = jsYaml
  window.lodash = lodash
  var editor = null
  var session = null

  export default {
    mixins: [ BaseComponent ],
    name: 'Editer',
    components: { CodeViewer },
    data: function () {
      return {
        content: '',
        jsonContent: '',
        errorList: [],
        origindata: `
path: /name
type: get
description: 获取用户姓名
definitions:
  Pet: &Pet
    product_id: string|Unique identifier
    description: string|Description of product.
parameters:
  id: int|用户id
  name: string|用户姓名
responses:
  200:
    pageSize: int
    list:
      - name: int|描述
        url: string|描述
        pets:
          - <<: *Pet
        age: int
  500:
    code: int
    error: string
`
      }
    },
    mounted () {
      editor = ace.edit('editor')
      var langTools = ace.require('ace/ext/language_tools')
      var mockCompleter = {
        getCompletions: function (editor, session, pos, prefix, callback) {
          var wordList = ['@cword', '@url', '@email']
          var row = pos.row
          var col = pos.column - prefix.length
          var at = session.getTextRange(new Range(row, col - 1, row, col))
          console.log('prefix', prefix, pos)
          if (prefix.length !== 0) {
            wordList = wordList.filter(meta => {
              var reg = new RegExp(prefix.split('').join('\\w*'))
              console.log('reg:', reg)
              return reg.test(meta)
            })
          }
          callback(null, wordList.map(function (word, index) {
            return {name: word, value: at === '@' ? word.replace(/^[@]/, '') : word, score: 100, meta: 'mock'}
          }))
        }
      }
      langTools.addCompleter(mockCompleter)
      editor.setOptions(editorSetting)
      editor.resize()
      editor.setValue(this.pipe(this.origindata, this.Yaml2MockedYaml))
      session = editor.getSession()
      window.session = session
      window.editor = editor
      window.page = this

      this.editorChange()
      session.on('change', lodash.debounce(e => this.editorChange(e), 300))
      editor.commands.on('afterExec', function (e) {
        if (e.command.name == 'insertstring' && /^[@\w|]$/.test(e.args)) {
          editor.execCommand('startAutocomplete')
        }
      })
    },
    methods: {
      pipe () {
        var args = [].slice.call(arguments, 0)
        var val = args[0]
        for (let arg of args) {
          if (args.indexOf(arg) != 0 && typeof arg === 'function') {
            try {
              val = arg(val)
            } catch (e) {
              console.error(e)
              if (e instanceof jsYaml.YAMLException) this.markerError(e)
              return ''
            }
            this.errorList = []
          }
        }
        return val
      },
      collapseLinesWithStartKey (key) {
        if (!key) return null
        var patern = new RegExp(key)
        var ops = { regExp: true }
        editor.find(patern, ops)
        session.toggleFoldWidget()
      },
      markerError (e) {
        this.errorList.push(e)
      },
      jump2error (mark) {
        editor.moveCursorToPosition({row: mark.line, column: mark.column})
        editor.clearSelection()
        editor.scrollToLine(mark.line, true, true)
      },
      editorChange: function () {
        this.content = editor.getValue()
        try {
          this.jsonContent = this.pipe(this.content, jsYaml.safeLoad, this.trimDef, this.mock2Data, JSON.stringify)
        } catch (e) {
          console.log(e)
        }
      },
      trimDef (input) {
//        var defArr = ['definitions', 'path', 'description', 'parameters', 'type']
        var defArr = ['definitions']
        for (let def of defArr) {
          delete input[def]
        }
        return input
      },
      Yaml2MockedYaml (input) {
        var reg = /:\s*(string|int|number|bool|boolean)(?:\s*\|\s*(.+))?[\n\r]/mig
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
              count = '+1'
              val = '999999'
              break
            case 'bool':
            case 'boolean':
              count = '1'
              val = 'true'
              break
          }
          console.log('p2:', p2)
          return p2 ? `|${count}: ${val} # ${p2}\n` : `|${count}: ${val}\n`
        }
        console.log('fff', input.replace(reg, replacer))
        return input.replace(reg, replacer)
      },
      mock2Data (input) {
//        var input = input.replace('@')
        return Mock.mock(input)
      }
    }
  }
</script>

