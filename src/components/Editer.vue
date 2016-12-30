<template>

  <div class="content">
    <div class="editor">
      <div class="econ" id="editor">
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
  var editor = null
  export default {
    mixins: [ BaseComponent ],
    name: 'Editer',
    components: { CodeViewer },
    data: function () {
      return {
        content: '',
        jsonContent: ''
      }
    },
    mounted () {
      editor = ace.edit('editor')
      editor.setOptions(editorSetting)
      editor.resize()
      this.editorChange()
      editor.getSession().on('change', e => {
        this.editorChange(e)
      })
    },
    methods: {
      editorChange: function () {
        this.content = editor.getValue()
        try {
          this.jsonContent = JSON.stringify(jsYaml.safeLoad(this.content))
          console.log(typeof this.jsonContent, this.jsonContent)
        } catch (e) {
          console.log(e)
        }
        editor.getValue()
      }
    }
  }
</script>

