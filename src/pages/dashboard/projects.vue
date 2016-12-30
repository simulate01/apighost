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
            <form class="project-filter-form" id="project-filter-form" action="/dashboard/projects"
                  accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓"><input type="search"
                                                                                                        name="filter_projects"
                                                                                                        id="project-filter-form-field"
                                                                                                        placeholder="Filter by name..."
                                                                                                        class="project-filter-form-field form-control input-short projects-list-filter"
                                                                                                        spellcheck="false"
                                                                                                        tabindex="2"
                                                                                                        value="">
            </form>
            <div class="dropdown inline">
              <button class="dropdown-menu-toggle " id="sort-projects-dropdown" type="button" data-toggle="dropdown">
                <span class="dropdown-toggle-text">Last updated</span><i class="fa fa-chevron-down"></i></button>
              <ul class="dropdown-menu dropdown-menu-align-right dropdown-menu-selectable">
                <li class="dropdown-header">
                  Sort by
                </li>
                <li>
                  <a href="/dashboard/projects?archived=&amp;group=&amp;namespace_id=&amp;personal=&amp;scope=&amp;sort=name_asc&amp;tag=&amp;visibility_level=">Name
                  </a></li>
                <li>
                  <a class="is-active"
                     href="/dashboard/projects?archived=&amp;group=&amp;namespace_id=&amp;personal=&amp;scope=&amp;sort=updated_desc&amp;tag=&amp;visibility_level=">Last
                    updated
                  </a></li>
                <li>
                  <a href="/dashboard/projects?archived=&amp;group=&amp;namespace_id=&amp;personal=&amp;scope=&amp;sort=updated_asc&amp;tag=&amp;visibility_level=">Oldest
                    updated
                  </a></li>
                <li>
                  <a href="/dashboard/projects?archived=&amp;group=&amp;namespace_id=&amp;personal=&amp;scope=&amp;sort=created_desc&amp;tag=&amp;visibility_level=">Last
                    created
                  </a></li>
                <li>
                  <a href="/dashboard/projects?archived=&amp;group=&amp;namespace_id=&amp;personal=&amp;scope=&amp;sort=created_asc&amp;tag=&amp;visibility_level=">Oldest
                    created
                  </a></li>
                <li class="divider"></li>
                <li>
                  <a class="is-active"
                     href="/dashboard/projects?archived=&amp;group=&amp;namespace_id=&amp;scope=&amp;sort=updated_desc&amp;tag=&amp;visibility_level=">Hide
                    archived projects
                  </a></li>
                <li>
                  <a href="/dashboard/projects?archived=true&amp;group=&amp;namespace_id=&amp;scope=&amp;sort=updated_desc&amp;tag=&amp;visibility_level=">Show
                    archived projects
                  </a></li>
                <li class="divider"></li>
                <li>
                  <a class="is-active"
                     href="/dashboard/projects?group=&amp;namespace_id=&amp;personal=&amp;scope=&amp;sort=updated_desc&amp;tag=&amp;visibility_level=">Owned
                    by anyone
                  </a></li>
                <li>
                  <a href="/dashboard/projects?group=&amp;namespace_id=&amp;personal=true&amp;scope=&amp;sort=updated_desc&amp;tag=&amp;visibility_level=">Owned
                    by me
                  </a></li>
              </ul>
            </div>

            <a class="btn btn-new" href="#/projects_new">New Project
            </a></div>
        </div>

        <div class="projects-list-holder">
          <ul v-if="activeName==='me'" class="projects-list content-list">
            <li v-for="item in tableInfo.data" class="project-row">
              <div class="controls">
                <span><i class="fa fa-star"></i>0</span>

                <span v-if="item.visibilitylevel===0" class="visibility-icon has-tooltip" data-container="body"
                      data-placement="left" title=""
                      data-original-title="Private - Project access must be granted explicitly to each user.">
                 <i class="fa fa-lock fa-fw"></i>
                </span>
                <span v-if="item.visibilitylevel===1" class="visibility-icon has-tooltip" data-container="body"
                      data-placement="left"
                      title="Public - The project can be cloned without any authentication.">
                    <i class="fa fa-globe fa-fw"></i>
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
        this.activeName = tab.index
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
