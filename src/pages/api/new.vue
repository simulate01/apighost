<template>
  <div class="page">
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="controls">
          <el-select
              v-model="value10"
              multiple
              filterable
              allow-create
              placeholder="接口标签">
            <el-option
                v-for="item in options5"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-button type="warning">
            <el-tooltip content="发布后会通知管理者，管理者统一后该api的修改能同步导项目中">
              发布 <i class="ifont icon-menu"></i>
            </el-tooltip>
          </el-button>
          <el-button type="primary">保存</el-button>
          <el-button type="success" @click="editMock">MOCK</el-button>
          <el-button type="danger">删除</el-button>
        </div>
      </div>
    </div>
    <div class="content-wrapper page-with-layout-nav" :style="{height: (appInfo.size.height-50-58) + 'px'}">
      <editer></editer>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .page
    overflow hidden
    display box
    -webkit-box-orient: vertical;
    .layout-nav
      .controls-left
        float left
    .content-wrapper
      display flex
      flex 1
      width 100%

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Editer from 'src/components/Editer'
  import {mapState} from 'vuex'

  export default{
    mixins: [ BasePage ],
    components: { Editer },
    name: 'api_new',
    data () {
      return {
        options5: [ {
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        } ],
        value10: []
      }
    },
    computed: mapState({
      appInfo: state => state.app
    }),
    mounted: function () {
    },
    methods: {
      handleClick: function () {

      },
      editMock: function () {
        this.openDialog({
          name: 'DMock',
          data: {
          },
          methods: {}
        })
      }
    }
  }
</script>
