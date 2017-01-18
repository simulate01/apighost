<template>
  <div class="ui_charcoal login-page application navless">

    <header class="navbar navbar-fixed-top navbar-empty">
      <div class="container">
        <div class="center-logo">
          <img src="./assets/image/logo.png" alt="logo">
        </div>
      </div>
    </header>


    <div class="container navless-container">
      <div class="content">
        <div class="row">
          <div class="col-sm-5 pull-right">
            <div>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="登 陆" name="first"></el-tab-pane>
                <el-tab-pane label="注 册" name="second"></el-tab-pane>
              </el-tabs>
              <div v-if="activeName==='first'" class="login-box">
                <div class="login-heading">
                  <h3>已经有用户? 登陆</h3>
                </div>
                <div class="login-body">
                  <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px">
                    <el-form-item label="邮 箱" prop="account">
                      <el-input placeholder="邮箱" v-model="loginForm.account">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="密 码" prop="password">
                      <el-input placeholder="密 码" v-model="loginForm.password">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="记住密码">
                      <el-switch on-text="" off-text="" v-model="loginForm.remember"></el-switch>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="loginSubmit">登 陆</el-button>
                    </el-form-item>

                  </el-form>
                </div>
              </div>
              <div v-if="activeName==='second'" class="login-box">
                <div class="login-heading">
                  <h3>没有用户? 创建新用户</h3>
                </div>
                <div class="login-body">
                  <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="80px">
                    <el-form-item label="姓 名" prop="password">
                      <el-input placeholder="姓 名" v-model="registerForm.name">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="邮 箱" prop="email">
                      <el-input placeholder="邮 箱" v-model="registerForm.email">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="密 码" prop="password">
                      <el-input placeholder="密 码" v-model="registerForm.password">
                      </el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="password">
                      <el-input placeholder="确认密码" v-model="registerForm.password">
                      </el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="registerSubmit">注 册</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>

          </div>
          <div class="col-sm-7 brand-holder pull-left">
            <h1 class="logoText">
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

      </div>
    </div>


  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .logoText
    text-shadow: 0 6px 1px rgba(0, 0, 0, 0.2);
    font-family: 'Lobster', cursive;

  .center-logo
    img
      width 40px
      height 40px

  .login-box
    padding 20px 20px
    border 1px solid #ddd
    border-radius 5px
</style>
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Server from './extend/Server'
  var SHA256 = require('crypto-js/sha256')

  export default {
    data: function () {
      return {
        loginRules: {
          account: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入账户名称', trigger: 'blur' },
            { min: 3, max: 15, message: '3-15位大小写字母和._-组成的名称', trigger: 'blur' }
          ]
        },
        registerRules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          account: [
            { required: true, message: '请输入账户名称', trigger: 'blur' },
            { min: 3, max: 15, message: '3-15位大小写字母和._-组成的名称', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ]
        },
        loginForm: {
          account: '',
          password: '',
          remember: true
        },
        registerForm: {
          email: '',
          account: '',
          password: ''
        },
        activeName: 'first'
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
      handleClick: function (index) {
        this.activeName = index.name
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
      },
      loginSubmit () {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            window.alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      /**
       * 注册内容提交
       */
      registerSubmit: function () {
        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            window.alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm () {
        this.$refs.form.resetFields()
      }
    }
  }
</script>

