<template>
  <div class="login">
    <div class="header">
      <img src="./assets/image/login.png"/>
    </div>
    <h2>{{packageInfo.description}}</h2>
    <div>
      <div class="form-group">
        <input type="text" v-model="loginName" class="form-control" placeholder="登陆账号"/>
      </div>
      <div class="form-group">
        <input type="password" v-model="password" class="form-control" placeholder="密码"/>
      </div>
      <div class="btnWarp">
        <button type="button" @click="submit" class="btn btn-primary">登陆</button>
        <button type="button" @click="register" class="btn btn-warn">注册</button>
      </div>
    </div>
    <p>
      <small>
        <b>Copyright</b>
        {{packageInfo.Copyright}}
      </small>
    </p>
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped type="text/css">
  .login {
    color: #909496;
    margin-left: -150px;
    margin-top: -230px;
    width: 300px;
    height: 400px;
    text-align: center;
    position: absolute;
    top: 46%;
    left: 50%;
    z-index: 100;
    opacity: 0;
    animation: myfirst 1s;
    -webkit-animation: myfirst 1s; /* Safari and Chrome */
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    animation-timing-function: linear;
    @keyframes myfirst {
      0% {
        opacity: 0;
        -webkit-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        transform: translateY(-20px);
      }

      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
      }
    }
    h2 {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 100;
    }
    .header {
      margin-bottom: 20px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    .form-control {
      height: 34px;
      outline: none;
      box-sizing: border-box;
      background-color: #FFFFFF;
      background-image: none;
      border: 1px solid #e5e6e7;
      border-radius: 1px;
      color: inherit;
      display: block;
      padding: 6px 12px;
      transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
      width: 100%;
      font-size: 14px;
    }
    .form-control:focus {
      border-color: #1ab394;
    }
    .btn-primary {
      background-color: #1ab394;
      border-color: #1ab394;
      color: #FFFFFF;
    }
    .btn-warn {
      background-color: #ffaa10;
      border-color: #ffaa10;
      color: #FFFFFF;
    }
    .btnWarp{
      display: flex;
    }
    .btn {
      width: 100% !important;
      border-radius: 3px;
      display: inline-block;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.42857143;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      user-select: none;
      background-image: none;
      border: 1px solid transparent;
      border-radius: 4px;
      display: inline-block;
      flex: 1;
      margin: 10px;
    }
    p {
      margin-top: 20px;
      b {
        color: #6d6767;
      }
      small {
        font-size: 12px;
      }
    }

  }
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

