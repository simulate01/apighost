<template>
  <div class="page">
    <router-link to="/demo_dialog">
      <el-button type="text">弹出框例子</el-button>
    </router-link>
    <router-link to="/demo_city">
      <el-button type="text">城市选择</el-button>
    </router-link>
    <router-link to="/demo_list">
      <el-button type="text">列表</el-button>
    </router-link>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'

  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'demo_home',
    methods: {}
  }
</script>
