<template>
  <div>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="controls">
          <el-button-group>
            <el-button type="primary">历史版本</el-button>
            <el-button type="primary">保存</el-button>
            <el-button type="primary">mock</el-button>
            <el-button type="primary">删除</el-button>
          </el-button-group>
        </div>
        <div class="nav-control scrolling-tabs-container">
          <div class="fade-left">
            <i class="fa fa-angle-left"></i>
          </div>
          <div class="fade-right">
            <i class="fa fa-angle-right"></i>
          </div>
          <ul class="nav-links scrolling-tabs">
            <li class="home">
              <a title="Project" class="shortcuts-project" href="#/project">
                <span>项目</span>
              </a>
            </li>
            <li class="home">
              <span>当前版本V1.1</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="content-wrapper page-with-layout-nav">
      <editer></editer>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .content-wrapper
    display flex
    height 700px
    width 100%
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Editer from 'src/components/Editer'
  export default{
    mixins: [ BasePage ],
    components: { Editer },
    name: 'api_new',
    data () {
      return {}
    },
    mounted: function () {
    },
    methods: {}
  }
</script>
