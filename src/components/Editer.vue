<template>
  <div id="editor">function foo(items) {
    var x = "All this is syntax highlighted";
    return x;
    }
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  #editor
    width 700px
    height 500px
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import ace from 'ace'
  export default {
    mixins: [ BaseComponent ],
    name: 'Editer',
    data: function () {
      return {}
    },
    mounted () {
      var editor = ace.edit('editor')
      editor.setTheme('ace/theme/yaml')
      editor.getSession().setMode('ace/mode/javascript')
      editor.resize()
    },
    methods: {}
  }
</script>

