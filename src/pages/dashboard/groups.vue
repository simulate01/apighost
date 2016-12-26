<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="top-area">
          <el-tabs class="nav-links" :active-name="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="我的分组" name="me"></el-tab-pane>
            <el-tab-pane label="更多分组" name="more"></el-tab-pane>
          </el-tabs>
          <div class="nav-controls">
            <a class="btn btn-new" href="#/groups_new">新建分组
            </a></div>
        </div>
        <ul v-if="activeName==='me'" class="content-list">
          <li v-for="item in tableInfo.data" class="group-row">
            <div class="controls hidden-xs">
              <a class="btn" href="#/groups_edit"><i class="fa fa-cogs"></i></a>
              <a data-confirm="Are you sure you want to leave the &quot;util&quot; group?" class="btn"
                 title="Leave this group" rel="nofollow" data-method="delete" href="/groups/util/group_members/leave"><i
                  class="fa fa-sign-out"></i></a>
            </div>
            <div class="stats">
              <span><i class="fa fa-bookmark"></i>7</span>
              <span><i class="fa fa-users"></i>5</span>
              <span class="visibility-icon has-tooltip" data-container="body" data-placement="left"
                    title="Public - The group and any public projects can be viewed without any authentication."><i
                  class="fa fa-globe"></i></span>
            </div>
            <img class="avatar s40 hidden-xs"
                 src="/assets/no_group_avatar-4a9d347a20d783caee8aaed4a37a65930cb8db965f61f3b72a2e954a0eaeb8ba.png"
                 alt="No group avatar">
            <div class="title">
              <router-link class="group-name" :to="{path:'/groups_members',query:item.name}">{{item.name}}</router-link>
              as <span>Owner</span>
            </div>
            <div class="description">
              <p>{{item.description}}</p>
            </div>
          </li>
        </ul>
        <ul v-if="activeName==='more'" class="content-list">
        </ul>
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
    name: 'dashboard_groups',
    data () {
      return {
        activeName: 'me',
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
      tabHandleClick (tab) {
        this.activeName = tab.index
      },
      loadData (pageId) {
        this.tableInfo.pagination.curr = pageId
        var data = Object.assign({}, this.tableInfo.search)
        data.pageId = pageId - 1
        data.pageSize = this.tableInfo.pagination.size
        Server({
          url: 'group/list',
          method: 'get',
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
