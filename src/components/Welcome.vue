<template>
  <div class="welcome">
    <div class="el-loading-demo">
      <div v-loading="true"></div>
      <div class="desc">{{loadingDesc}}</div>
    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped type="text/css">
  .welcome {
    background-color: rgba(64, 66, 69, 0.65);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .el-loading-demo {
    position: absolute;
    top: 50%;
    width: 100px;
    left: 0;
    text-align: center;
    right: 0;
    margin: auto;
    .desc {
      margin-top: 20px;
    }
  }
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import Server from '../extend/Server'
  var menuData = require('../assets/data/menu.json')
  export default {
    mixins: [ BaseComponent ],
    name: 'Welcome',
    data: function () {
      return {
        loadingDesc: '初始化中---'
      }
    },
    mounted () {
      // 获取用户信息
      Server({
        url: 'userInfo',
        method: 'get'
      }).then((response) => {
        // 初始化导航信息
        console.log('response11', response)
        this.$store.dispatch('initMenuData', menuData)
        // 设置用户信息
        this.$store.dispatch('initUserInfo', response.data)
        this.$emit('loadend')
      }).catch(() => {
        // this.$alert('获取用户信息失败')
      })
    },
    methods: {}
  }
</script>

