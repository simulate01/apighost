<template>
  <div class="nicescroll sidebar-expanded sidebar-wrapper">
    <div class="sidebar-action-buttons">
      <a @click.prevent="toggle" class="nav-header-btn toggle-nav-collapse">
        <el-tooltip content="Toggle navigation">
          <i class="iconfont icon-menu"></i>
        </el-tooltip>
      </a>
      <a @click.prevent="setting" class="nav-header-btn pin-nav-btn has-tooltip js-nav-pin"
         :class="[{'is-active':theme.isSetting}]"
         title="Unpin navigation"
         data-placement="right" data-container="body">
        <el-tooltip content="固定">
          <i class="iconfont icon-guding fa-thumb-tack"></i>
        </el-tooltip>
      </a>
    </div>
    <ul class="nav nav-sidebar" tabindex="0" style="overflow: hidden; outline: none;">
      <li class="home"><a title="Projects" class="dashboard-shortcuts-projects" href="#/dashboard_projects"><span>
项目
</span>
      </a></li>

      <li class=""><a class="dashboard-shortcuts-activity" title="Activity" href="#/dashboard_activity"><span>
动态
</span>
      </a></li>
      <li class=""><a title="Groups" href="#/dashboard_groups"><span>
我的分组
</span>
      </a>
      <li class=""><a title="Help" href="#/help"><span>
帮助
</span>
      </a></li>
      <li class=""><a title="Profile Settings" data-placement="bottom" href="#/profile"><span>
用户设置
</span>
      </a></li>
    </ul>

    <div id="ascrail2000" class="nicescroll-rails nicescroll-rails-vr"
         style="width: 7px; z-index: 1000; cursor: default; position: absolute; top: 50px; left: 213px; height: 906px; touch-action: none; display: none;">
      <div class="nicescroll-cursors"
           style="position: relative; top: 0px; float: right; width: 5px; height: 0px; background-color: rgb(255, 255, 255); border: 1px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 5px; touch-action: none;"></div>
    </div>
    <div id="ascrail2000-hr" class="nicescroll-rails nicescroll-rails-hr"
         style="height: 7px; z-index: 1000; top: 949px; left: 0px; position: absolute; cursor: default; display: none;">
      <div class="nicescroll-cursors"
           style="position: absolute; top: 0px; height: 5px; width: 0px; background-color: rgb(255, 255, 255); border: 1px solid rgb(255, 255, 255); background-clip: padding-box; border-radius: 5px;"></div>
    </div>
  </div>


</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import {mapState} from 'vuex'
  export default {
    mixins: [ BaseComponent ],
    name: 'Sidebar',
    data: function () {
      return {
        currentPage: ''
      }
    },
    computed: mapState({
      activeIndex: state => state.app.activeIndex,
      navTwoIndex: state => state.app.navTwoIndex,
      theme: state => state.app.theme,
      mainNav: state => {
        if (state.app.menuData[ state.app.navIndex ]) {
          return state.app.menuData[ state.app.navIndex ].child
        } else {
          return []
        }
      }
    }),
    ready: function () {
    },
    initEvent: function () {
    },

    methods: {
      toggle: function () {
        var istoggle = !this.theme.isToggle
        this.$store.dispatch('updataTheme', {
          isToggle: istoggle
        })
      },
      setting: function () {
        var isSetting = !this.theme.isSetting
        this.$store.dispatch('updataTheme', {
          isSetting: isSetting
        })
      },
      activeOne: function (data) {
        this.$router.push({
          path: '/' + data.resKey, params: data.params, query: data.query
        })
      }
    }
  }
</script>

