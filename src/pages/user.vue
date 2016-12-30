<template>
  <div class="page">
    User {{ $route.params.id }}
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  export default{
    mixins: [ BasePage ],
    components: {},
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to, from)
      }
    },
    name: 'user'
  }
</script>
