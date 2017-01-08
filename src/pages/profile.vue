<template>
  <div class="content-wrapper page-with-layout-nav">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">


        <div class="row prepend-top-default">
          <div class="col-lg-3 profile-settings-sidebar">
            <h4 class="prepend-top-0">
              用户信息
            </h4>
            <p>

            </p>
          </div>
          <div class="col-lg-9">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
              <el-form-item label="头 像">
                <div class="headIcon">
                  <img :src="form.image">
                </div>
                <el-upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    :multiple=false
                    :show-upload-list=false
                    :on-preview="handlePreview"
                    :on-remove="handleRemove">
                  <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item label="姓 名" prop="name">
                <el-input placeholder="姓名" v-model="form.name">
                </el-input>
              </el-form-item>
              <el-form-item label="账 户" prop="account">
                <el-input placeholder="账户" v-model="form.account">
                </el-input>
              </el-form-item>
              <el-form-item label="邮 箱" prop="email">
                <el-input placeholder="邮箱" v-model="form.email">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">立即创建</el-button>
                <el-button @click="resetForm">取消</el-button>
              </el-form-item>

            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .headIcon
    width 150px
    height 150px
    border-radius 50%
    overflow hidden
    margin 20px
    img
      width: 100%
      height 100%
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'profile',
    data () {
      return {
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          account: [
            { required: true, message: '请输入账户名称', trigger: 'blur' },
            { min: 3, max: 15, message: '3-15位大小写字母和._-组成的名称', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ]
        },
        // 一个典型列表数据格式
        form: {
          image: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          name: '',
          email: '',
          account: ''
        }
      }
    },
    mounted: function () {
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview (file) {
        console.log(file)
      },
      submitForm () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            window.alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm () {
        this.$refs.form.resetFields()
      }
    }
  }
</script>
