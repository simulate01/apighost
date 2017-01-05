<template>
  <div class="ui_charcoal login-page application navless">

    <header class="navbar navbar-fixed-top navbar-empty">
      <div class="container">
        <div class="center-logo">

        </div>
      </div>
    </header>


    <div class="container navless-container">
      <div class="content">
        <div class="row">
          <div class="col-sm-5 pull-right">
            <div>
              <div class="login-box">
                <div class="login-heading">
                  <h3>已经有用户? 登陆</h3>
                </div>
                <div class="login-body">
                  <div class="new_user" id="new_user" >

                    <input
                        class="form-control top" placeholder="账户或邮箱" autofocus="autofocus"
                        autocapitalize="off"
                        autocorrect="off" type="text" name="user[login]" id="user_login">
                    <input class="form-control bottom" placeholder="密码" type="password" name="user[password]"
                           id="user_password"
                    >
                    <div class="remember-me checkbox">
                      <label for="user_remember_me">
                        <input type="checkbox" value="1" name="user[remember_me]" id="user_remember_me">
                        <span>记住登陆</span>
                      </label>
                      <div class="pull-right">
                        <a href="#/user_newpassword">忘记密码?</a>
                      </div>
                    </div>
                    <div>
                      <input type="submit" name="commit" value="登陆" class="btn btn-save">
                    </div>
                  </div>
                </div>
              </div>

              <div class="prepend-top-20">
                <div class="login-box">
                  <div class="login-heading">
                    <h3>没有用户? 创建新用户</h3>
                  </div>
                  <div class="login-body">
                    <div class="new_new_user">
                      <div class="devise-errors">
                      </div>
                      <div>
                        <input class="form-control top" placeholder="姓名" required="required" type="text"
                               name="new_user[name]" id="new_user_name">
                      </div>
                      <div>
                        <input class="form-control middle" placeholder="账户" required="required" type="text"
                               name="new_user[username]" id="new_user_username">
                      </div>
                      <div>
                        <input class="form-control middle" placeholder="邮箱" required="required" type="email" value=""
                               name="new_user[email]" id="new_user_email">
                      </div>
                      <div class="form-group append-bottom-20" id="password-strength">
                        <input class="form-control bottom" placeholder="不少于8位的密码"
                               type="password" name="new_user[password]" id="new_user_password">
                      </div>
                      <div>
                        <input type="submit" name="commit" value="注册" class="btn-create btn">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div class="col-sm-7 brand-holder pull-left">
            <h1>
              Go InterFace
            </h1>
            <h3>接口定义神器</h3>
            <p>
              高效开发
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="footer-links">
        <a href="/explore">Explore</a>
        <a href="/help">Help</a>
        <a href="https://about.gitlab.com/">About GitLab</a>
      </div>
    </div>


    <div class="device-xs visible-xs"></div>
    <div class="device-sm visible-sm"></div>
    <div class="device-md visible-md"></div>
    <div class="device-lg visible-lg"></div>

  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped type="text/css">
</style>
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Server from './extend/Server'
  var SHA256 = require('crypto-js/sha256')

  export default {
    data: function () {
      return {
        loginName: '12345678905',
        password: '123456',
        cachePassword: false,
        autoLogin: true
      }
    },
    computed: mapState({
      packageInfo: state => state.app.packageInfo
    }),
    mounted: function () {
    },
    methods: {
      parseURL: function (url) {
        var a = document.createElement('a')
        a.href = url
        return {
          params: (function () {
            var ret = {}
            var seg = a.search.replace(/^\?/, '').split('&')
            var len = seg.length
            var i = 0
            var s = null
            for (; i < len; i++) {
              if (!seg[ i ]) {
                continue
              }
              s = seg[ i ].split('=')
              ret[ s[ 0 ] ] = s[ 1 ]
            }
            return ret
          })()
        }
      },
      submit: function () {
        var me = this
        Server({
          url: 'user/login',
          method: 'post', // default
          needLoading: true,
          data: {
            'loginName': me.loginName,
            'password': SHA256(me.password) + '',
            'appType': 3 // web端登陆
          }
        }).then((response) => {
          console.log(response)
          this.loginSuccess(response.data)
        }).catch((error) => {
          console.log(error)
        })
      },
      register: function () {

      },
      editPassword: function () {
      },
      loginSuccess: function (data) {
        // 重定向到退出登陆的页面地址
        // 记录登陆信息。可以是cookie 也可以是 session
        if (data.sessionId) {
          window.sessionStorage.setItem('session', data.sessionId)
        }
        var info = this.parseURL(window.location.href)
        if (info.params.url) {
          window.location.replace(decodeURIComponent(info.params.url))
        } else {
          window.location.replace('index.html')
        }
      }
    }
  }
</script>

