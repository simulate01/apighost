<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="top-area">
          <el-tabs class="nav-links" :active-name="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="我的组" name="me"></el-tab-pane>
            <el-tab-pane label="我参加的组" name="more"></el-tab-pane>
          </el-tabs>
          <div class="nav-controls">
            <router-link class="btn btn-new" to="groups_new">新建分组
            </router-link></div>
        </div>
        <ul v-if="activeName==='me'" class="content-list">
          <li v-for="item in tableInfo.data" class="group-row">
            <img class="avatar s40 hidden-xs"
                 src="http://secure.gravatar.com/avatar/fc5654afbe167b98e93674175607b80e?s=52&d=identicon"
                 alt="No group avatar">
            <div class="title">
              <router-link class="group-name" :to="{path:'/groups_members',query:item.name}">
                分组名称
              </router-link>
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
        this.activeName = tab.name
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
