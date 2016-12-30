<template>
  <div class="content-wrapper page-with-layout-nav">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">

        <form class="edit-user prepend-top-default" id="edit_user_24" enctype="multipart/form-data" action="/profile"
              accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden"
                                                                                                     name="_method"
                                                                                                     value="put"><input
            type="hidden" name="authenticity_token"
            value="40P12Xds7I142bB0wCsgxlDYGKYOp8ewli75gtQnD+XOOyBK20K2NKbAnk36kABISsnfPyRfSVfI6hBGas355A==">
          <div class="row">
            <div class="col-lg-3 profile-settings-sidebar">
              <h4 class="prepend-top-0">
                Public Avatar
              </h4>
              <p>
                You can upload an avatar here
                or change it at <a href="http://secure.gravatar.com">secure.gravatar.com</a>
              </p>
            </div>
            <div class="col-lg-9">
              <div class="clearfix avatar-image append-bottom-default">
                <img alt="" class="avatar s160"
                     src="http://secure.gravatar.com/avatar/fc5654afbe167b98e93674175607b80e?s=320&amp;d=identicon">
              </div>
              <h5 class="prepend-top-0">
                Upload new avatar
              </h5>
              <div class="prepend-top-5 append-bottom-10">
                <a class="btn js-choose-user-avatar-button">
                  Browse file...
                </a>
                <span class="avatar-file-name prepend-left-default js-avatar-filename">No file chosen</span>
                <input class="js-user-avatar-input hidden" accept="image/*" type="file" name="user[avatar]-trigger"
                       id="user_avatar-trigger">
              </div>
              <div class="help-block">
                The maximum file size allowed is 200KB.
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-lg-3 profile-settings-sidebar">
              <h4 class="prepend-top-0">
                Main settings
              </h4>
              <p>
                This information will appear on your profile.
              </p>
            </div>
            <div class="col-lg-9">
              <div class="form-group">
                <label class="label-light" for="user_name">Name</label>
                <input class="form-control" required="required" type="text" value="王坤明" name="user[name]" id="user_name"
                       style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
                <span class="help-block">Enter your name, so people you know can recognize you.</span>
              </div>
              <div class="form-group">
                <label class="label-light" for="user_email">Email</label>
                <input class="form-control" required="required" type="text" value="kunming.wangkm@ymm56.com"
                       name="user[email]" id="user_email">
                <span class="help-block">We also use email for avatar detection if no avatar is uploaded.</span>
              </div>
              <div class="form-group">
                <label class="label-light" for="user_email">Account</label>
                <input class="form-control" required="required" type="text" value="kunming.wangkm@ymm56.com"
                       name="user[email]" id="user_account">
                <span class="help-block">We also use email for avatar detection if no avatar is uploaded.</span>
              </div>
              <div class="prepend-top-default append-bottom-default">
                <input type="submit" name="commit" value="Update profile settings" class="btn btn-success">
                <a class="btn btn-cancel" href="/u/wangkm">Cancel</a>
              </div>
            </div>
          </div>
        </form>
        <div class="modal modal-profile-crop">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button class="close" data-dismiss="modal" type="button">
<span>
×
</span>
                </button>
                <h4 class="modal-title">
                  Position and size your new avatar
                </h4>
              </div>
              <div class="modal-body">
                <div class="profile-crop-image-container">
                  <img class="modal-profile-crop-image">
                </div>
                <div class="crop-controls">
                  <div class="btn-group">
                    <button class="btn btn-primary" data-method="zoom" data-option="0.1">
                      <span class="fa fa-search-plus"></span>
                    </button>
                    <button class="btn btn-primary" data-method="zoom" data-option="-0.1">
                      <span class="fa fa-search-minus"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary js-upload-user-avatar" type="button">
                  Set new profile picture
                </button>
              </div>
            </div>
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
    name: 'profile',
    mounted: function () {

    }
  }
</script>
