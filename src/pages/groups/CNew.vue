<template>
  <div>
    <h3 class="page-title">
      新建分组
    </h3>
    <hr>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="图标">
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
    name: 'groups_cnew',
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
        // 一个典型列表数据格式
        form: {
          image: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
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
