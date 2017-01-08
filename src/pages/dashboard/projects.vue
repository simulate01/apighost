<template>
  <div class="content-wrapper">
    <div class="flash-container flash-container-page">
    </div>
    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="top-area">
          <el-tabs class="nav-links" :active-name="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="我的项目" name="me"></el-tab-pane>
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

            <a class="btn btn-new" href="#/projects_new">创建项目</a>
          </div>
        </div>

        <div class="projects-list-holder">
          <ul v-if="activeName==='me'" class="projects-list content-list">
            <li v-for="item in tableInfo.data" class="project-row">
              <div class="controls">
                <span><i class="el-icon-star-on"></i>0</span>

                <span class="visibility-icon has-tooltip" data-container="body"
                      data-placement="left" title=""
                      data-original-title="Private - Project access must be granted explicitly to each user.">
                 <i class="el-icon-information"></i>
                </span>

              </div>
              <div class="title">
                <router-link class="project" :to="{path:'/project',query:{group:item.group,name:item.name}}">
                  <div class="dash-project-avatar">
                    <div class="avatar project-avatar s40 identicon" style="background-color: #E8EAF6; color: #555">D
                    </div>
                  </div>
                  <span class="project-full-name">
                  <span class="namespace-name">
                  {{item.group}}
                  /
                  </span>
                  <span class="project-name filter-title">
                  {{item.name}}
                  </span>
                  </span>
                </router-link>
              </div>
              <div class="description">
                <p>{{item.description}}</p>
              </div>
            </li>
          </ul>
          <ul v-if="activeName==='star'" class="projects-list content-list">
          </ul>
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
