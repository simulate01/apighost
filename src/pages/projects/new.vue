<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <div class="project-edit-container">
          <div class="project-edit-errors">


          </div>
          <div class="row prepend-top-default">
            <div class="col-lg-3 profile-settings-sidebar">
              <h4 class="prepend-top-0">
                新建项目
              </h4>
              <p>
                创建的项目必须在指定的一个组里面，可以自己新建分组
              </p>
            </div>
            <div class="col-lg-9">

              <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="所属组">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="项目名称">
                  <el-input placeholder="项目名称" v-model="form.name">
                  </el-input>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="form.description"></el-input>
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
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'projects_new',
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
