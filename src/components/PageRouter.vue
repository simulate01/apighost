<template>
  <component :is="currPage"></component>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import BaseComponent from 'src/extend/BaseComponent'
  import noPage from '../pages/404'
  var pagePrex = 'page-'
  export default {
    mixins: [ BaseComponent ],
    name: 'PageRouter',
    data: function () {
      return {
        currPage: ''
      }
    },
    components: { 'page-404': noPage },
    mounted: function () {
      this.loadPage(this.$route.params, () => {})
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to, from)
        if (to.params.page != from.params.page) {
          // 如果页面改变。load新页面加入
          this.loadPage(to.params, () => {
          })
        }
      }
    },
    methods: {
      noPage: function () {
        this.currPage = pagePrex + '404'
      },
      loadPage: function (data, fn) {
        var name = data.page || 'home'
        var path = name.split('_').join('/')
        System.import('../pages/' + path + '').then(module => {
          if (name != module.name) {
            console.warn('/(ㄒoㄒ)/~~页面名称和路径名称不同,请修改' + path + '.vue 文件中的name:' + module.name + ' 为 ' + 'name:' + name)
          }
          Vue.component(`${pagePrex}${name}`, module)
          this.currPage = pagePrex + name
          fn()
        }).catch(() => {
          console.error('不存在该页面', name)
          this.noPage()
        })
      }
    }
  }
</script>

