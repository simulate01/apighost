<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <h3 class="page-title">
          新建分组
        </h3>
        <hr>
        <el-form ref="form" :model="form" label-width="80px">


          <el-form-item label="名称">
            <el-input placeholder="名称" v-model="form.name">
            </el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" v-model="form.description"></el-input>
          </el-form-item>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <ul>
                <li>项目都是在每个具体的分组里面</li>
                <li>每个组里面可以添加多个用户，添加的用户都可以看到该组的项目</li>
                <li>项目的名称是和组名一起唯一确定项目的</li>
                <li>分组不能重复</li>
              </ul>

            </div>
          </div>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>

        </el-form>


      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'groups_new',
    data () {
      return {
        // 一个典型列表数据格式
        options: [ {
          value: '1',
          label: 'H5deplov'
        }, {
          value: '2',
          label: 'Util'
        }, {
          value: '2',
          label: '添加新组'
        } ],
        value: '',
        form: {
          name: '',
          groupId: '',
          description: ''
        }
      }
    },
    mounted: function () {
    },
    methods: {
      onSubmit: function () {

      }
    }
  }
</script>
