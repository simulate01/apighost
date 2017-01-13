<template>
  <div class="content-wrapper">
    <div class="flash-container flash-container-page">
    </div>
    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="top-area">
          <el-tabs class="nav-links" :active-name="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="我的参与的项目" name="me"></el-tab-pane>
            <el-tab-pane label="关注项目" name="star"></el-tab-pane>
          </el-tabs>
          <div class="nav-controls">

            <div class="dropdown inline">
              <el-input
                  size="large"
                  placeholder="搜索"
                  v-model="input6">
              </el-input>
            </div>

            <router-link class="btn btn-new" to="projects_new">创建项目</router-link>
          </div>
        </div>

        <div class="projects-list-holder">
          <ul v-if="activeName==='me'" class="projects-list content-list">
            <router-link :to="{path:'/project',query:{group:item.group,name:item.name}}" tag="li"
                         v-for="item in tableInfo.data" class="project-row">
              <div class="title">
                <div class="project">
                  <div class="dash-project-avatar">
                    <div class="avatar project-avatar s40 identicon" style="background-color: #E8EAF6; color: #555">D
                    </div>
                  </div>
                  <span class="project-full-name">
                  <router-link tag="span" to="user" class="namespace-name">
                  用户名称
                  /
                  </router-link>
                  <router-link tag="span" to="groups_index" class="namespace-name">
                  {{item.group}}
                  /
                  </router-link>
                  <router-link tag="span" to="project" class="project-name filter-title">
                  {{item.name}}
                  </router-link>
                  </span>
                </div>
              </div>
              <div class="description">
                <p>{{item.description}}</p>
              </div>
            </router-link>
          </ul>
          <ul v-if="activeName==='star'" class="projects-list content-list">
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .project-name, .namespace-name
    cursor pointer
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'dashboard_projects',
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
