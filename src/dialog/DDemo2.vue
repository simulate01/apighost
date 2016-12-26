<template>
  <el-dialog title="收货地址" v-model="dialogFormVisible" @close="close">
    <div>{{title}}</div>
    <span slot="footer" class="dialog-footer">
      <el-button @click.native="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="test()">确 定</el-button>
    </span>
  </el-dialog>
</template>
<style lang="less" rel="stylesheet/css" scoped type="text/css">

</style>
<script type="text/ecmascript-6">
  import BaseDialog from 'src/extend/BaseDialog'
  export default {
    mixins: [ BaseDialog ],
    name: 'DDemo2',
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

