<template>
  <div class="content-wrapper page-with-layout-nav">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="top-area">
          <el-tabs class="nav-links" :active-name="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="成 员" name="member"></el-tab-pane>
            <el-tab-pane label="项 目" name="project"></el-tab-pane>
            <el-tab-pane label="设 置" name="setting"></el-tab-pane>
          </el-tabs>
        </div>
        <div v-if="activeName=='member'" class="group-members-page prepend-top-default">
          <members></members>
        </div>
        <div v-if="activeName=='project'" class="projects-list-holder">
          <ul class="projects-list content-list">
            <li class="project-row">
              <div class="controls">
<span>
<i class="fa fa-star"></i>
0
</span>
                <span class="visibility-icon has-tooltip" data-container="body" data-placement="left"
                      title="Public - The project can be cloned without any authentication.">
<i class="fa fa-globe fa-fw"></i>
</span>
              </div>
              <div class="title">
                <a class="project" href="/h5developer/shop">
                  <div class="dash-project-avatar">
                    <div class="avatar project-avatar s40 identicon" style="background-color: #FBE9E7; color: #555">S
                    </div>
                  </div>
                  <span class="project-full-name">
<span class="namespace-name">
h5developer
/
</span>
<span class="project-name filter-title">
shop
</span>
</span>
                </a></div>
              <div class="description">
                <p>运满满商城项目</p>
              </div>
            </li>


            <li class="project-row">
              <div class="controls">
<span>
<i class="fa fa-star"></i>
0
</span>
                <span class="visibility-icon has-tooltip" data-container="body" data-placement="left"
                      title="Public - The project can be cloned without any authentication.">
<i class="fa fa-globe fa-fw"></i>
</span>
              </div>
              <div class="title">
                <a class="project" href="/chonglu.wangcl/YMM-BACK">
                  <div class="dash-project-avatar">
                    <div class="avatar project-avatar s40 identicon" style="background-color: #E0F2F1; color: #555">Y
                    </div>
                  </div>
                  <span class="project-full-name">
<span class="namespace-name">
chonglu.wangcl
/
</span>
<span class="project-name filter-title">
YMM-BACK
</span>
</span>
                </a></div>
              <div class="description">
                <p>老大后太项目源码</p>
              </div>
            </li>

          </ul>
          <div class="gl-pagination">
            <ul class="pagination clearfix">
              <li class="prev disabled">
                <span>Prev</span>
              </li>

              <li class="page active">
                <a href="/">1</a>
              </li>

              <li class="page">
                <a rel="next" href="/?page=2">2</a>
              </li>

              <li class="page">
                <a href="/?page=3">3</a>
              </li>

              <li class="page">
                <a href="/?page=4">4</a>
              </li>

              <li class="next">
                <a rel="next" href="/?page=2">Next</a>
              </li>


            </ul>
          </div>

        </div>
        <div v-if="activeName=='setting'">
            <div class="panel panel-default prepend-top-default">
              <div class="panel-heading">
                基本设置
              </div>
              <div class="panel-body">
                form
              </div>
            </div>
            <div class="panel panel-danger">
              <div class="panel-heading">删除分组</div>
              <div class="panel-body">
                <p>
                  删除分组会导致该分组的项目全部被删除
                  <br>
                  <strong>移除分组后不能回退，确定移除分组</strong>
                </p>
                <div class="form-actions">
                  <a data-confirm="Removed group can not be restored! Are you sure?" class="btn btn-remove" rel="nofollow" data-method="delete" href="/groups/h5developer">移除分组</a>
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
  import Members from './members.vue'
  export default{
    mixins: [ BasePage ],
    components: { Members },
    name: 'groups_index',
    data () {
      return {
        // 一个典型列表数据格式
        form: {
          image: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          name: '',
          groupId: '',
          description: ''
        },
        activeName: 'member'
      }
    },
    mounted: function () {
    },
    methods: {
      tabHandleClick (tab) {
        this.activeName = tab.name
      }
    }
  }
</script>
