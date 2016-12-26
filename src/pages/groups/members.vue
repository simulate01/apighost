<template>
  <div class="content-wrapper page-with-layout-nav">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="group-members-page prepend-top-default">
          <div class="panel panel-default">
            <div class="panel-heading">
              Add new user to group
            </div>
            <div class="panel-body">
              <p class="light">
                Members of group have access to all group projects.
              </p>
              <div class="new-group-member-holder">
                <form class="form-horizontal users-group-form" id="new_group_member" action="/groups/util/group_members" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="/wsAuRyklxPxi5wHPpk03Un/5jp4lDRHFemrQSEe8TLSc9UqsIrNqi+Ssj4EIhRTU+4ho1JsuqBLLUKFn/QHMw=="><div class="form-group">
                  <label class="control-label" for="group_member_user_ids">People</label>
                  <div class="col-sm-10">
                    <div class="select2-container select2-container-multi ajax-users-select multiselect input-large" id="s2id_user_ids"><ul class="select2-choices">  <li class="select2-search-field">    <label for="s2id_autogen93" class="select2-offscreen"></label>    <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-default" id="s2id_autogen93" placeholder="" style="width: 894px;">  </li></ul><div class="select2-drop select2-drop-multi select2-display-none ajax-users-dropdown">   <ul class="select2-results">   <li class="select2-no-results">No matches found</li></ul></div></div><input type="hidden" name="user_ids" id="user_ids" value="" class="ajax-users-select multiselect input-large" data-placeholder="Search for a user" data-null-user="false" data-any-user="false" data-email-user="true" data-first-user="false" data-current-user="false" data-push-code-to-protected-branches="null" data-author-id="" data-skip-users="null" tabindex="-1" style="display: none;">
                    <div class="help-block">
                      Search for users by name, username, or email, or invite new ones using their email address.
                    </div>
                  </div>
                </div>
                  <div class="form-group">
                    <label class="control-label" for="group_member_access_level">Group Access</label>
                    <div class="col-sm-10">
                      <div class="select2-container project-access-select select2" id="s2id_access_level" style="width: 90px;"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-94">Guest</span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen94" class="select2-offscreen"></label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-94" id="s2id_autogen94"><div class="select2-drop select2-display-none select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen94_search" class="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-94" id="s2id_autogen94_search" placeholder="">   </div>   <ul class="select2-results" role="listbox" id="select2-results-94">   </ul></div></div><select name="access_level" id="access_level" class="project-access-select select2" tabindex="-1" title="" style="display: none;"><option value="10">Guest</option>
                      <option value="20">Reporter</option>
                      <option value="30">Developer</option>
                      <option value="40">Master</option>
                      <option value="50">Owner</option></select>
                      <div class="help-block">
                        Read more about role permissions
                        <strong><a class="vlink" href="/help/user/permissions">here</a></strong>
                      </div>
                    </div>
                  </div>
                  <div class="form-actions">
                    <input type="submit" name="commit" value="Add users to group" class="btn btn-create">
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading">
              <strong>util</strong>
              group members
              <span class="badge">5</span>
              <div class="controls">
                <form class="form-inline member-search-form" action="/groups/util/group_members" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓"><div class="form-group">
                  <input type="search" name="search" id="search" placeholder="Find existing member by name" class="form-control" spellcheck="false" value="">
                </div>
                  <button name="button" type="submit" class="btn" title="Search"><i class="fa fa-search"></i>
                  </button></form></div>
            </div>
            <ul class="content-list">


              <li class="group_member js-toggle-container" id="group_member_421">
                <div class="controls">
                  <strong class="control-text">Master</strong>
                  <button name="button" type="button" class="btn inline js-toggle-button" title="Edit access level"><i class="fa fa-pencil"></i></button>
                  <a data-confirm="Are you sure you want to remove 陈天唯 from the util group?" class="btn btn-remove" title="Remove user from group" data-remote="true" rel="nofollow" data-method="delete" href="/groups/util/group_members/421"><i class="fa fa-trash"></i></a>
                </div>
                <span class="list-item-name">
<img class="avatar s40" alt="" src="http://secure.gravatar.com/avatar/d7a49e16e30a9e4af1f09bde259374a5?s=80&amp;d=identicon">
<strong>
<a href="/u/chentw">陈天唯</a>
</strong>
<span class="cgray">chentw</span>
<div class="cgray">
Joined <time class="js-timeago" datetime="2016-10-08T09:43:21Z" title="" data-toggle="tooltip" data-placement="top" data-container="body" data-original-title="Oct 8, 2016 5:43pm GMT+0800">2 months ago</time>
</div>
</span>
                <div class="edit-member hide js-toggle-content">
                  <br>
                  <form class="edit_group_member" id="edit_group_member_421" action="/groups/util/group_members/421" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><div class="prepend-top-10">
                    <select class="form-control" name="group_member[access_level]" id="group_member_access_level"><option value="10">Guest</option>
                      <option value="20">Reporter</option>
                      <option value="30">Developer</option>
                      <option selected="selected" value="40">Master</option>
                      <option value="50">Owner</option></select>
                  </div>
                    <div class="prepend-top-10">
                      <input type="submit" name="commit" value="Save" class="btn btn-save btn-sm">
                    </div>
                  </form></div>
              </li>

              <li class="group_member js-toggle-container" id="group_member_185">
                <div class="controls">
                  <strong class="control-text">Owner</strong>
                  <button name="button" type="button" class="btn inline js-toggle-button" title="Edit access level"><i class="fa fa-pencil"></i></button>
                  <a data-confirm="Are you sure you want to leave the &quot;util&quot; group?" class="btn btn-remove" rel="nofollow" data-method="delete" href="/groups/util/group_members/leave"><i class="fa fa-sign-out"></i> Leave</a>
                </div>
                <span class="list-item-name">
<img class="avatar s40" alt="" src="http://secure.gravatar.com/avatar/fc5654afbe167b98e93674175607b80e?s=80&amp;d=identicon">
<strong>
<a href="/u/wangkm">王坤明</a>
</strong>
<span class="cgray">wangkm</span>
<span class="label label-success">It's you</span>
<div class="cgray">
Joined <time class="js-timeago" datetime="2016-10-08T09:43:04Z" title="" data-toggle="tooltip" data-placement="top" data-container="body" data-original-title="Oct 8, 2016 5:43pm GMT+0800">2 months ago</time>
</div>
</span>
                <div class="edit-member hide js-toggle-content">
                  <br>
                  <form class="edit_group_member" id="edit_group_member_185" action="/groups/util/group_members/185" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><div class="prepend-top-10">
                    <select class="form-control" name="group_member[access_level]" id="group_member_access_level"><option value="10">Guest</option>
                      <option value="20">Reporter</option>
                      <option value="30">Developer</option>
                      <option value="40">Master</option>
                      <option selected="selected" value="50">Owner</option></select>
                  </div>
                    <div class="prepend-top-10">
                      <input type="submit" name="commit" value="Save" class="btn btn-save btn-sm">
                    </div>
                  </form></div>
              </li>

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
  import Server from 'src/extend/Server'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'projects_members',
    data () {
      return {
        // 一个典型列表数据格式
        tableInfo: {
          search: {},
          data: [],
          pagination: {
            size: 10,
            total: 0,
            curr: 0
          }
        }
      }
    },
    mounted: function () {
      this.loadData(1)
    },
    methods: {
      loadData (pageId) {
        this.tableInfo.pagination.curr = pageId
        var data = Object.assign({}, this.tableInfo.search)
        data.pageId = pageId - 1
        data.pageSize = this.tableInfo.pagination.size
        Server({
          url: 'projects',
          method: 'post',
          data: data
        }).then((response) => {
          var data = response.data
          // 设置分页信息
          this.tableInfo.pagination.total = data.totalNum
          this.tableInfo.data = data.list
        }).catch(() => {

        })
      },
      search () {
        this.loadData(this.tableInfo.pagination.curr)
      }
    }
  }
</script>
