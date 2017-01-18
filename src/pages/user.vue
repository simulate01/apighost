<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class=" ">
      <div class="content">
        <div class="user-profile">
          <div class="cover-block">
            <div class="cover-controls">
<span class="report-abuse">
<a class="btn btn-gray" title="Report abuse" data-toggle="tooltip" data-placement="left" data-container="body" href="/abuse_reports/new?ref_url=http%3A%2F%2Fcode.ymmoa.com%2Fh5developer%2Flottery%2Factivity&amp;user_id=77"><i class="fa fa-exclamation-circle"></i>
</a></span>
              &nbsp;
              <a class="btn btn-gray" href="/u/mingyuan.wei.atom?private_token=yfATUx1kcCzcuBAZbdyC"><i class="fa fa-rss"></i>
              </a></div>
            <div class="avatar-holder">
              <a target="_blank" href="http://secure.gravatar.com/avatar/706766aba6ccf2210430c35913569b9b?s=800&amp;d=identicon"><img class="avatar s90" alt="" src="http://secure.gravatar.com/avatar/706766aba6ccf2210430c35913569b9b?s=180&amp;d=identicon">
              </a></div>
            <div class="cover-title">
              mingyuan.wei
            </div>
            <div class="cover-desc">
<span class="middle-dot-divider">
@mingyuan.wei
</span>
              <span class="middle-dot-divider">
Member since Aug 19, 2016 4:15pm
</span>
            </div>
            <div class="cover-desc">
              电话：132123121
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
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to, from)
      }
    },
    name: 'user'
  }
</script>
