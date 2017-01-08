<template>
  <div id="codeviewer" class="codeviewer">
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .codeviewer
    height 100%
    width 100%
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import ace from 'ace'
  var editor = null
  export default {
    mixins: [ BaseComponent ],
    name: 'CodeViewer',
    props: {
      ctype: {
        type: String,
        required: true
      },
      contents: {
        type: String,
        default: function () {
          return '{}'
        }
      },
      options: {
        type: Object,
        default: function () {
          return {
            'readOnly': true,
            'theme': 'ace/theme/solarized_dark'
          }
        }
      }
    },
    data: function () {
      return {
        content: ''
      }
    },
    watch: {
      contents: function (val) {
        this.changeContent()
      }
    },
    mounted () {
      editor = ace.edit('codeviewer')
      editor.setOptions(this.options)
      editor.getSession().setMode('ace/mode/' + this.ctype)
      editor.$blockScrolling = Infinity
      console.log('this.contents', this.contents)
      this.changeContent()
      editor.resize()
    },
    methods: {
      changeContent: function () {
        var str = ''
        try {
          str = JSON.stringify(JSON.parse(this.contents), null, 2)
        } catch (e) {

        }
        editor.setValue(str)
      }
    }
  }
</script>

