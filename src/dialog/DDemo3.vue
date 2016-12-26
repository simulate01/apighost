<template>
  <div>
    haoduoneirong
    {{title}}
  </div>
</template>
<style lang="less" rel="stylesheet/css" scoped type="text/css">
</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  export default {
    mixins: [ BaseDialog ],
    name: 'DDemo3',
    data: function () {
      return {
        dialogFormVisible: true
      }
    },
    computed: {},
    methods: {
      test: function () {
        this.oktest()
      }
    }
  }
</script>

