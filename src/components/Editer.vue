<template>
  <div style="width: 100%">

    <div class="content">
      <div class="editor">
        <div class="econ" id="editor">
        </div>
      </div>
      <div class="preview">
        <div class="path">
          <div class="operations">
            <div class="operation">
              <header>
                <a class="focus-editor" tooltip-trigger="mouseenter"> </a>
                <div class="http-method"> <div :class="[apiInfo.type]" class="method">{{apiInfo.type}} </div>{{apiInfo.path}}</div>
              </header>
              <div class="content">
                <section class="description" v-if="apiInfo.description"><h4>描述</h4>
                  <div>
                    <p>{{apiInfo.description}}</p>
                  </div>
                </section>
                <section class="parameters">
                  <h4>参数</h4>
                  <div>
                    <el-table
                        :data="getParameters(apiInfo.parameters)"
                        style="width: 100%">
                      <el-table-column
                          prop="name"
                          label="Name"
                          width="80">
                      </el-table-column>
                      <el-table-column
                          prop="in"
                          label="Located in"
                          width="80">
                      </el-table-column>
                      <el-table-column
                          prop="description"
                          label="Description">
                      </el-table-column>
                      <el-table-column
                          prop="required"
                          label="Required">
                      </el-table-column>
                      <el-table-column
                          prop="schema"
                          label="Schema">
                      </el-table-column>
                    </el-table>
                  </div>
                </section>
                 <section class="responses">
                   <h4>Responses</h4>
                   <div class="responseContent">
                     <code-viewer :contents="JSON.stringify(apiInfo.responses)" :ctype="'json'"></code-viewer>
                   </div>
                 </section>
              </div>
            </div>
          </div>
        </div>
      </div>
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

  .preview
    .path
      list-style: none;
      .operations
        .operation
          list-style: none;
          border-radius: 5px;
          header
            padding: 10px;
            color: #323235;
            position: relative;
            .method
              display inline-block
              font-size 20px
              margin-right 20px
              &.post
                color: #dd8a2e;
              &.get
                color: #0a8edd;
            .edit
              position: absolute;
              right: 30px;
              top: 10px;
              color: #ffffff;
          .content
            padding: 10px;
            display block
            section
              display block
              width 100%
              .responseContent
                width 100%
                height 400px



</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import CodeViewer from 'src/components/CodeViewer'
  import ace from 'ace'
  import jsYaml from 'js-yaml'
  import editorSetting from 'src/assets/data/editorSetting.json'
  var editor = null
  export default {
    mixins: [ BaseComponent ],
    name: 'Editer',
    components: { CodeViewer },
    data: function () {
      return {
        content: `path: /name
type: get
description: 获取用户姓名
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
          - $ref: $Pet
        age: int
  500:
    code: int
    error: string
definitions:
  Pet:
    product_id: string|Unique identifier
    description: string|Description of product.
`,
        apiInfo: {
          type: ''
        }
      }
    },
    mounted () {
      editor = ace.edit('editor')
      editor.setOptions(editorSetting)
      editor.resize()
      this.editorChange()
      editor.setValue(this.content)
      editor.getSession().on('change', e => {
        this.content = editor.getValue()
        this.editorChange()
      })
    },
    methods: {
      analysisVal: function (val) {
        var vals = val.split('|')
        var data = {
          schema: '',
          in: 'param',
          required: true,
          description: ''
        }
        if (vals.length == 1) {
          data.schema = vals[ 0 ]
        } else if (vals.length == 2) {
          data.schema = vals[ 0 ]
          data.description = vals[ 1 ]
        }
        // todo 错误验证
        return data
      },
      getParameters: function (data) {
        var array = []
        if (data) {
          for (let key in data) {
            var parame = {}
            Object.assign(parame, this.analysisVal(data[ key ]))
            parame.name = key
            array.push(parame)
          }
        }
        return array
      },
      getResponse: function (data) {
        var array = []
        if (data) {
          for (let key in data) {
            data[ key ].code = key
            array.push(data[ key ])
          }
        }
        return array
      },
      editorChange: function () {
        var apiInfo
        try {
          apiInfo = jsYaml.safeLoad(this.content)
          console.log(typeof this.apiInfo, this.apiInfo)
        } catch (e) {
          apiInfo = {}
          console.log(e)
        } finally {
          this.apiInfo = apiInfo
        }
        editor.getValue()
      }
    }
  }
</script>

