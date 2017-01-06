<template>
  <header class="header-collapsed navbar navbar-fixed-top navbar-gitlab"
          :class="[{'header-collapsed':theme.isToggle,'header-collapsed':!theme.isToggle,'header-pinned-nav':theme.isSetting}]">
    <div class="container-fluid">
      <div class="header-content">
        <button @click.stop="toggle" aria-label="Toggle global navigation" class="side-nav-toggle" type="button">
          <span class="sr-only">Toggle navigation</span>
          <i class="iconfont icon-menu"></i>
        </button>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="hidden-sm hidden-xs">
              <div class="search search-form">
                <el-input
                    placeholder="搜索"
                    icon="search"
                    v-model="input2"
                    @click="handleIconClick"></el-input>
              </div>
            </li>
            <li>
              <a title="New project" aria-label="New project" data-toggle="tooltip" data-placement="bottom"
                 data-container="body" href="#/projects_new"><i class="el-icon-plus"></i>
              </a></li>
            <li class="header-user dropdown">
              <el-popover
                  ref="user-tip"
                  placement="bottom"
                  width="260"
                  v-model="visibleUser">
                <div class="dropdown-menu-nav dropdown-menu-align-right">
                  <ul>
                    <li>
                      <a class="profile-link" aria-label="Profile" data-user="wangkm" href="#/user">Profile</a>
                    </li>
                    <li>
                      <a aria-label="Profile Settings" href="#/profile">Profile Settings</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a @click="logout" class="sign-out-link" aria-label="Sign out" rel="nofollow"
                         data-method="delete">Sign
                        out</a>
                    </li>
                  </ul>
                </div>
              </el-popover>
              <a v-popover:user-tip class="header-user-dropdown-toggle" data-toggle="dropdown" href="#/user">
                <img width="26" height="26" class="header-user-avatar"
                     src="http://secure.gravatar.com/avatar/fc5654afbe167b98e93674175607b80e?s=52&amp;d=identicon"
                     alt="Fc5654afbe167b98e93674175607b80e?s=52&amp;d=identicon">
                <span class="caret"></span>
              </a>
            </li>
          </ul>
        </div>
        <h1 class="title"><a href="#/dashboard_projects">Projects</a></h1>
        <div class="header-logo"></div>
      </div>
    </div>
  </header>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .dropdown-menu-nav
    display block
    position relative
    border none
  .search
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 7.5px;
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'

  import {mapState} from 'vuex'
  export default {
    mixins: [ BaseComponent ],
    name: 'Header',
    data: function () {
      return {
        visibleUser: false
      }
    },
    computed: mapState({
      navIndex: state => state.app.navIndex,
      mainNav: state => state.app.menuData,
      theme: state => state.app.theme,
      packageInfo: state => state.app.packageInfo, // 项目信息
      userInfo: state => state.userInfo // 用户信息
    }),
    created: function () {
    },
    methods: {
      toggle: function () {
        var istoggle = !this.theme.isToggle
        this.$store.dispatch('updataTheme', {
          isToggle: istoggle
        })
      },
      handleIconClick: function () {

      },
      /**
       * 登出
       */
      logout: function () {
        this.$confirm('确认登出系统', '提示', {
          type: 'warning'
        }).then(() => {
          // todo 服务端登陆接口访问
          this.ema.fire('logout')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

