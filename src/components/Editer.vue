<template>
  <div style="width: 100%">

    <div class="content">
      <div class="editor">
        <div class="econ" id="editor">
        </div>
      </div>
      <div class="preview">
        <doc-viewer :apiInfo="apiInfo"></doc-viewer>
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
      overflow auto
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import CodeViewer from 'src/components/CodeViewer'
  import DocViewer from 'src/components/DocViewer'
  import ace from 'ace'
  import jsYaml from 'js-yaml'
  import editorSetting from 'src/assets/data/editorSetting.json'
  var editor = null
  export default {
    mixins: [ BaseComponent ],
    name: 'Editer',
    components: { CodeViewer, DocViewer },
    data: function () {
      return {
        content: `path: /name
type: get
description: 获取用fdsafdsa户姓名
parameters:
  body:
    good:
      - name: good
        age: 123
    id!number!true!好多描述信息哈哈哈:
    name!string!good:
    pet:
      id!number!true!haoduo:
      name!string!good:
  path:
    name:
  query:
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
      editor.$blockScrolling = Infinity
      editor.getSession().on('change', e => {
        this.content = editor.getValue()
        this.editorChange()
      })
    },
    methods: {

      editorChange: function () {
        var apiInfo
        try {
          apiInfo = jsYaml.safeLoad(this.content)
          console.log(typeof this.apiInfo, this.apiInfo)
        } catch (e) {
          apiInfo = {}
        } finally {
          this.apiInfo = apiInfo
        }
        editor.getValue()
      }
    }
  }
</script>

