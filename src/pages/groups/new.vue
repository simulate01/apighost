<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <h3 class="page-title">
          New Group
        </h3>
        <hr>
        <form class="group-form form-horizontal" id="new_group" enctype="multipart/form-data" action="/groups" accept-charset="UTF-8" method="post" _lpchecked="1"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="wrgxohJBqczSa+h0esxzdUFcsgFBe6DqSydWDWtrdAbvwOQxvm/zdQxyxk1Ad1P7W011mGuDLg0V47/J1YGCBw==">
          <div class="form-group">
            <label class="control-label" for="group_path">Group path
            </label><div class="col-sm-10">
            <div class="input-group">
              <div class="input-group-addon">
                http://code.ymmoa.com/
              </div>
              <input placeholder="open-source" class="form-control" autofocus="autofocus" type="text" name="group[path]" id="group_path">
            </div>
          </div>
          </div>
          <div class="form-group group-description-holder">
            <label class="control-label" for="group_description">Description</label>
            <div class="col-sm-10">
              <textarea maxlength="250" class="form-control js-gfm-input" rows="4" name="group[description]" id="group_description"></textarea>
            </div>
          </div>

          <div class="form-group group-description-holder">
            <label class="control-label" for="group_avatar">Group avatar</label>
            <div class="col-sm-10">
              <a class="choose-btn btn btn-sm js-choose-group-avatar-button">
                <i class="fa fa-paperclip"></i>
                <span>Choose File ...</span>
              </a>
              &nbsp;
              <span class="file_name js-avatar-filename">File name...</span>
              <input class="js-group-avatar-input hidden" type="file" name="group[avatar]" id="group_avatar">
              <div class="light">The maximum file size allowed is 200KB.</div>

            </div>
          </div>
          <div class="form-group project-visibility-level-holder">
            <label class="control-label" for="group_visibility_level">Visibility Level
              <a href="/help/public_access/public_access">(?)</a>
            </label><div class="col-sm-10">
            <div class="radio">
              <label for="group_visibility_level_0"><input type="radio" value="0" name="group[visibility_level]" id="group_visibility_level_0">
                <i class="fa fa-lock fa-fw"></i>
                <div class="option-title">
                  Private
                </div>
                <div class="option-descr">
                  The group and its projects can only be viewed by members.
                </div>
              </label></div>
            <div class="radio">
              <label for="group_visibility_level_10"><input type="radio" value="10" name="group[visibility_level]" id="group_visibility_level_10">
                <i class="fa fa-shield fa-fw"></i>
                <div class="option-title">
                  Internal
                </div>
                <div class="option-descr">
                  The group and any internal projects can be viewed by any logged in user.
                </div>
              </label></div>
            <div class="radio">
              <label for="group_visibility_level_20"><input type="radio" value="20" name="group[visibility_level]" id="group_visibility_level_20">
                <i class="fa fa-globe fa-fw"></i>
                <div class="option-title">
                  Public
                </div>
                <div class="option-descr">
                  The group and any public projects can be viewed without any authentication.
                </div>
              </label></div>

          </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <ul>
                <li>A group is a collection of several projects</li>
                <li>Members of a group may only view projects they have permission to access</li>
                <li>Group project URLs are prefixed with the group namespace</li>
                <li>Existing projects may be moved into a group</li>
              </ul>

            </div>
          </div>
          <div class="form-actions">
            <input type="submit" name="commit" value="Create group" class="btn btn-create" tabindex="3">
            <a class="btn btn-cancel" href="/dashboard/groups">Cancel</a>
          </div>
        </form>
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
    name: 'groups_new',
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
