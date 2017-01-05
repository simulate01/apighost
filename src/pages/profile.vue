<template>
  <div class="content-wrapper page-with-layout-nav">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">


        <div class="row">
          <div class="col-lg-3 profile-settings-sidebar">
            <h4 class="prepend-top-0">
              用户信息
            </h4>
            <p>

            </p>
          </div>
          <div class="col-lg-9">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="姓名">
                <el-input placeholder="姓名" v-model="form.name">
                </el-input>
              </el-form-item>
              <el-form-item label="账户">
                <el-input placeholder="账户" v-model="form.account">
                </el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input placeholder="邮箱" v-model="form.email">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>

            </el-form>
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
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'profile',
    data () {
      return {
        // 一个典型列表数据格式
        form: {
          name: '',
          email: '',
          account: ''
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
