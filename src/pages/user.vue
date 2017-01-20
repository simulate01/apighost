<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class=" ">
      <div class="content">
        <div class="user-profile">
          <div class="cover-block">
            <div class="cover-controls">
              <a class="btn btn-gray" href="/u/mingyuan.wei.atom?private_token=yfATUx1kcCzcuBAZbdyC"><i
                  class="fa fa-rss"></i>
              </a></div>
            <div class="avatar-holder">
              <a target="_blank"
                 href="http://secure.gravatar.com/avatar/706766aba6ccf2210430c35913569b9b?s=800&amp;d=identicon"><img
                  class="avatar s90" alt=""
                  :src="userInfo.photo">
              </a></div>
            <div class="cover-title">
              {{userInfo.name}}
            </div>
            <div class="cover-desc">
              <span class="middle-dot-divider">
                            {{userInfo.email}}

              </span>
            </div>
            <div class="cover-desc">
              电话：{{userInfo.telephone}}
            </div>
            <ul class="nav-links center user-profile-nav">
            </ul>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'user',
    data: function () {
      return {}
    }
  }
</script>
