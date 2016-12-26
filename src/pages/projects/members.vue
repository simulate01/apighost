<template><div class="content-wrapper page-with-layout-nav">


  <div class="flash-container flash-container-page">
  </div>


  <div class="container-fluid container-limited ">
    <div class="content">
      <div class="project-members-page prepend-top-default">
        <div class="panel panel-default">
          <div class="panel-heading">
            Add new user to project
            <div class="controls">
              <a class="btn btn-grouped" title="Import members from another project" href="/h5developer/driver-loan2/project_members/import">Import members
              </a></div>
          </div>
          <div class="panel-body">
            <p class="light">
              Users with access to this project are listed below.
            </p>
            <form class="form-horizontal users-project-form" id="new_project_member" action="/h5developer/driver-loan2/project_members" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="4fLUIcOwjX0Z4J/uTGPbrsmWYu/Ya6e3rbjw95vM8urMigGyb57XxMf5sdd22Psg04eldvKTKVDzfBkzJSYE6w=="><div class="form-group">
              <label class="control-label" for="project_member_user_ids">People</label>
              <div class="col-sm-10">
                <div class="select2-container select2-container-multi ajax-users-select multiselect input-large" id="s2id_user_ids"><ul class="select2-choices">  <li class="select2-search-field">    <label for="s2id_autogen91" class="select2-offscreen"></label>    <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-default" id="s2id_autogen91" placeholder="" style="width: 894px;">  </li></ul><div class="select2-drop select2-drop-multi select2-display-none ajax-users-dropdown">   <ul class="select2-results">   <li class="select2-no-results">No matches found</li></ul></div></div><input type="hidden" name="user_ids" id="user_ids" value="" class="ajax-users-select multiselect input-large" data-placeholder="Search for a user" data-null-user="false" data-any-user="false" data-email-user="true" data-first-user="false" data-current-user="false" data-push-code-to-protected-branches="null" data-author-id="" data-skip-users="null" tabindex="-1" style="display: none;">
                <div class="help-block">
                  Search for users by name, username, or email, or invite new ones using their email address.
                </div>
              </div>
            </div>
              <div class="form-group">
                <label class="control-label" for="project_member_access_level">Project Access</label>
                <div class="col-sm-10">
                  <div class="select2-container project-access-select select2" id="s2id_access_level" style="width: 90px;"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-92">Guest</span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen92" class="select2-offscreen"></label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-92" id="s2id_autogen92"><div class="select2-drop select2-display-none select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen92_search" class="select2-offscreen"></label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-92" id="s2id_autogen92_search" placeholder="">   </div>   <ul class="select2-results" role="listbox" id="select2-results-92">   </ul></div></div><select name="access_level" id="access_level" class="project-access-select select2" tabindex="-1" title="" style="display: none;"><option value="10">Guest</option>
                  <option value="20">Reporter</option>
                  <option value="30">Developer</option>
                  <option value="40">Master</option></select>
                  <div class="help-block">
                    Read more about role permissions
                    <strong><a class="vlink" href="/help/user/permissions">here</a></strong>
                  </div>
                </div>
              </div>
              <div class="form-actions">
                <input type="submit" name="commit" value="Add users to project" class="btn btn-create">
              </div>
            </form>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading">
            <strong>driver-loan2</strong>
            project members
            <span class="badge">0</span>
            <div class="controls">
              <form class="form-inline member-search-form" action="/h5developer/driver-loan2/project_members" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓"><div class="form-group">
                <input type="search" name="search" id="search" placeholder="Find existing member by name" class="form-control" spellcheck="false" value="">
              </div>
                <button name="button" type="submit" class="btn" title="Search"><i class="fa fa-search"></i>
                </button></form></div>
          </div>
          <ul class="content-list">

          </ul>
        </div>


        <div class="panel panel-default">
          <div class="panel-heading">
            <strong>h5developer</strong>
            group members
            <span class="badge">13</span>
            <div class="controls">
              <a class="btn" href="/groups/h5developer/group_members">Manage group members</a>
            </div>
          </div>
          <ul class="content-list">











            <li class="group_member js-toggle-container" id="group_member_73">
              <div class="controls">
                <strong class="control-text">Developer</strong>
              </div>
              <span class="">
<img class="avatar s40" alt="" src="http://secure.gravatar.com/avatar/c47387a17075b3fcbef5322b65462279?s=80&amp;d=identicon">
<strong>
<a href="/u/xuan.liux">xuan.liux</a>
</strong>
<span class="cgray">xuan.liux</span>
<div class="cgray">
Joined <time class="js-timeago" datetime="2016-10-08T09:42:57Z" title="" data-toggle="tooltip" data-placement="top" data-container="body" data-original-title="Oct 8, 2016 5:42pm GMT+0800">2 months ago</time>
</div>
</span>
              <div class="edit-member hide js-toggle-content">
                <br>
                <form class="edit_group_member" id="edit_group_member_73" action="/groups/h5developer/group_members/73" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><div class="prepend-top-10">
                  <select class="form-control" name="group_member[access_level]" id="group_member_access_level"><option value="10">Guest</option>
                    <option value="20">Reporter</option>
                    <option selected="selected" value="30">Developer</option>
                    <option value="40">Master</option>
                    <option value="50">Owner</option></select>
                </div>
                  <div class="prepend-top-10">
                    <input type="submit" name="commit" value="Save" class="btn btn-save btn-sm">
                  </div>
                </form></div>
            </li>
            <li class="group_member js-toggle-container" id="group_member_72">
              <div class="controls">
                <strong class="control-text">Owner</strong>
              </div>
              <span class="">
<img class="avatar s40" alt="" src="http://secure.gravatar.com/avatar/fc5654afbe167b98e93674175607b80e?s=80&amp;d=identicon">
<strong>
<a href="/u/wangkm">王坤明</a>
</strong>
<span class="cgray">wangkm</span>
<span class="label label-success">It's you</span>
<div class="cgray">
Joined <time class="js-timeago" datetime="2016-10-08T09:42:57Z" title="" data-toggle="tooltip" data-placement="top" data-container="body" data-original-title="Oct 8, 2016 5:42pm GMT+0800">2 months ago</time>
</div>
</span>
              <div class="edit-member hide js-toggle-content">
                <br>
                <form class="edit_group_member" id="edit_group_member_72" action="/groups/h5developer/group_members/72" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><div class="prepend-top-10">
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
