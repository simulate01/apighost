<template>
  <div class="page-with-sidebar"
       :class="[{'page-sidebar-collapsed':theme.isToggle,'page-sidebar-expanded':!theme.isToggle,'page-sidebar-pinned':theme.isSetting}]">
    <c-sidebar></c-sidebar>
    <div @click="toggle">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
</style>

<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import CSidebar from 'src/components/Sidebar'
  import {mapState} from 'vuex'

  export default {
    mixins: [ BaseComponent ],
    name: 'Content',
    data: function () {
      return {
        minHeight: 500
      }
    },
    computed: mapState({
      theme: state => state.app.theme
    }),
    components: { CSidebar },
    mounted: function () {
      this.minHeight = window.document.body.offsetHeight - 50 - 45
    },
    methods: {
      toggle: function () {
        this.$store.dispatch('updataTheme', {
          isToggle: true
        })
      },
      changeTheme: function (color) {
        this.$store.dispatch('updataTheme', {
          theme: color
        })
      }
    }
  }
</script>

