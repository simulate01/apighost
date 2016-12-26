<template>
  <header class="header-collapsed navbar navbar-fixed-top navbar-gitlab"
          :class="[{'header-collapsed':theme.isToggle,'header-collapsed':!theme.isToggle,'header-pinned-nav':theme.isSetting}]">
    <div class="container-fluid">
      <div class="header-content">
        <button @click.stop="toggle" aria-label="Toggle global navigation" class="side-nav-toggle" type="button">
          <span class="sr-only">Toggle navigation</span>
          <i class="fa fa-bars"></i>
        </button>
        <button class="navbar-toggle" type="button">
          <span class="sr-only">Toggle navigation</span>
          <i class="fa fa-ellipsis-v"></i>
        </button>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="hidden-sm hidden-xs">
              <div class="search search-form">
                <form class="navbar-form" action="/search" accept-charset="UTF-8" method="get"><input name="utf8"
                                                                                                      type="hidden"
                                                                                                      value="✓">
                  <div class="search-input-container">
                    <div class="search-input-wrap">
                      <div class="dropdown" data-url="/search/autocomplete">
                        <input type="search" name="search" id="search" placeholder="Search"
                               class="search-input dropdown-menu-toggle disabled" spellcheck="false" tabindex="1"
                               autocomplete="off" data-toggle="dropdown" value="">
                        <div class="dropdown-menu dropdown-select">
                          <div class="dropdown-content">
                            <ul>
                              <li>
                                <a class="is-focused dropdown-menu-empty-link">
                                  Loading...
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
                        </div>
                        <i class="search-icon"></i>
                        <i class="clear-icon js-clear-input"></i>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="group_id" id="group_id">
                  <input type="hidden" name="project_id" id="search_project_id" value="">
                  <input type="hidden" name="repository_ref" id="repository_ref">
                  <div class="search-autocomplete-opts hide" data-autocomplete-path="/search/autocomplete"></div>
                </form>
              </div>

            </li>
            <li class="visible-sm visible-xs">
              <a title="Search" aria-label="Search" data-toggle="tooltip" data-placement="bottom" data-container="body"
                 href="/search"><i class="fa fa-search"></i>
              </a></li>
            <li>
              <a title="New project" aria-label="New project" data-toggle="tooltip" data-placement="bottom"
                 data-container="body" href="#/projects_new"><i class="fa fa-plus fa-fw"></i>
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

