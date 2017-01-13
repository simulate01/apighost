<template>
  <div class="content-wrapper page-with-layout-nav">
    <div class="panel panel-default">
      <div class="panel-heading">
        添加用户到组
      </div>
      <div class="panel-body">
        <p class="light">
          该组的用户能访问该组的所有项目
        </p>
        <div class="new-group-member-holder">
          <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="账号">
              <el-input placeholder="账号" v-model="form.name">
              </el-input>
            </el-form-item>
            <el-form-item label="权限">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in Metadata.projectPower"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">添加用户到组</el-button>
            </el-form-item>

          </el-form>
        </div>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <strong>****</strong>
        组 存在用户
        <span class="badge">50</span>
        <div class="controls">

        </div>
      </div>
      <ul class="content-list">
        <li class="group_member js-toggle-container" id="group_member_421">
          <div class="controls">
            <strong class="control-text">Master</strong>
            <button name="button" type="button" class="btn inline js-toggle-button" title="Edit access level"><i
                class="fa fa-pencil"></i></button>
            <a data-confirm="Are you sure you want to remove 陈天唯 from the util group?" class="btn btn-remove"
               title="Remove user from group" data-remote="true" rel="nofollow" data-method="delete"
               href="/groups/util/group_members/421"><i class="fa fa-trash"></i></a>
          </div>
          <span class="list-item-name">
<img class="avatar s40" alt=""
     src="http://secure.gravatar.com/avatar/d7a49e16e30a9e4af1f09bde259374a5?s=80&amp;d=identicon">
<strong>
<a href="/u/chentw">陈天唯</a>
</strong>
<span class="cgray">chentw</span>
<div class="cgray">
Joined <time class="js-timeago" datetime="2016-10-08T09:43:21Z" title="" data-toggle="tooltip" data-placement="top"
             data-container="body" data-original-title="Oct 8, 2016 5:43pm GMT+0800">2 months ago</time>
</div>
</span>
          <div class="edit-member hide js-toggle-content">
            <br>
            <form class="edit_group_member" id="edit_group_member_421" action="/groups/util/group_members/421"
                  accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden"
                                                                                 value="✓"><input type="hidden"
                                                                                                  name="_method"
                                                                                                  value="patch">
              <div class="prepend-top-10">
                <select class="form-control" name="group_member[access_level]" id="group_member_access_level">
                  <option value="10">Guest</option>
                  <option value="20">Reporter</option>
                  <option value="30">Developer</option>
                  <option selected="selected" value="40">Master</option>
                  <option value="50">Owner</option>
                </select>
              </div>
              <div class="prepend-top-10">
                <input type="submit" name="commit" value="Save" class="btn btn-save btn-sm">
              </div>
            </form>
          </div>
        </li>

        <li class="group_member js-toggle-container" id="group_member_185">
          <div class="controls">
            <strong class="control-text">Owner</strong>
            <button name="button" type="button" class="btn inline js-toggle-button" title="Edit access level"><i
                class="fa fa-pencil"></i></button>
            <a data-confirm="Are you sure you want to leave the &quot;util&quot; group?" class="btn btn-remove"
               rel="nofollow" data-method="delete" href="/groups/util/group_members/leave"><i
                class="fa fa-sign-out"></i> Leave</a>
          </div>
          <span class="list-item-name">
<img class="avatar s40" alt=""
     src="http://secure.gravatar.com/avatar/fc5654afbe167b98e93674175607b80e?s=80&amp;d=identicon">
<strong>
<a href="/u/wangkm">王坤明</a>
</strong>
<span class="cgray">wangkm</span>
<span class="label label-success">It's you</span>
<div class="cgray">
Joined <time class="js-timeago" datetime="2016-10-08T09:43:04Z" title="" data-toggle="tooltip" data-placement="top"
             data-container="body" data-original-title="Oct 8, 2016 5:43pm GMT+0800">2 months ago</time>
</div>
</span>
          <div class="edit-member hide js-toggle-content">
            <br>
            <form class="edit_group_member" id="edit_group_member_185" action="/groups/util/group_members/185"
                  accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden"
                                                                                 value="✓"><input type="hidden"
                                                                                                  name="_method"
                                                                                                  value="patch">
              <div class="prepend-top-10">
                <select class="form-control" name="group_member[access_level]" id="group_member_access_level">
                  <option value="10">Guest</option>
                  <option value="20">Reporter</option>
                  <option value="30">Developer</option>
                  <option value="40">Master</option>
                  <option selected="selected" value="50">Owner</option>
                </select>
              </div>
              <div class="prepend-top-10">
                <input type="submit" name="commit" value="Save" class="btn btn-save btn-sm">
              </div>
            </form>
          </div>
        </li>

      </ul>

    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  import {mapState} from 'vuex'

  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'projects_members',
    data () {
      return {
        // 一个典型列表数据格式
        form: {
          name: '',
          groupId: '',
          description: ''
        },
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
    computed: mapState({
      Metadata: state => state.Metadata
    }),
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
      onSubmit: function () {

      },
      search () {
        this.loadData(this.tableInfo.pagination.curr)
      }
    }
  }
</script>
