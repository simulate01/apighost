<template>
  <div class="path">
    <div class="operations">
      <div class="operation">
        <header>
          <a class="focus-editor" tooltip-trigger="mouseenter"> </a>
          <div class="http-method">
            <div :class="[apiInfo.type]" class="method">{{apiInfo.type}}</div>
            {{apiInfo.path}}
          </div>
        </header>
        <div class="content">
          <section class="description" v-if="apiInfo.description"><h4>描述</h4>
            <div>
              <p>{{apiInfo.description}}</p>
            </div>
          </section>
          <section class="parameters">
            <h4>参数</h4>
            <div>
              <el-table
                  :data="getParameters(apiInfo.parameters)"
                  style="width: 100%">
                <el-table-column
                    prop="name"
                    label="Name"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="in"
                    label="Located in"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="description"
                    label="Description">
                </el-table-column>
                <el-table-column
                    prop="required"
                    label="Required">
                </el-table-column>
                <el-table-column
                    prop="schema"
                    label="Schema">
                </el-table-column>
              </el-table>
            </div>
          </section>
          <section class="responses">
            <h4>Responses</h4>
            <div class="responseContent">
              <code-viewer :contents="JSON.stringify(apiInfo.responses)" :options="jsonViewOption"
                           :ctype="'json'"></code-viewer>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .path
    list-style: none;
    .operations
      .operation
        list-style: none;
        border-radius: 5px;
        header
          padding: 10px;
          color: #323235;
          position: relative;
          .method
            display inline-block
            font-size 20px
            margin-right 20px
            &.post
              color: #dd8a2e;
            &.get
              color: #0a8edd;
          .edit
            position: absolute;
            right: 30px;
            top: 10px;
            color: #ffffff;
        .content
          padding: 10px;
          display block
          section
            display block
            width 100%
            .responseContent
              width 100%
              height 400px
</style>
<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import CodeViewer from 'src/components/CodeViewer'
  export default {
    mixins: [ BaseComponent ],
    name: 'DocViewer',
    components: { CodeViewer },
    props: {
      apiInfo: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data: function () {
      return {
        jsonViewOption: {
          'theme': '',
          'showLineNumbers': false
        }
      }
    },
    watch: {
      contents: function (val) {
      }
    },
    mounted () {
    },
    methods: {
      analysisVal: function (val) {
        var vals = val.split('|')
        var data = {
          schema: '',
          in: 'param',
          required: true,
          description: ''
        }
        if (vals.length == 1) {
          data.schema = vals[ 0 ]
        } else if (vals.length == 2) {
          data.schema = vals[ 0 ]
          data.description = vals[ 1 ]
        }
        // todo 错误验证
        return data
      },
      getParameters: function (data) {
        var array = []
        if (data) {
          for (let key in data) {
            var parame = {}
            Object.assign(parame, this.analysisVal(data[ key ]))
            parame.name = key
            array.push(parame)
          }
        }
        return array
      },
      getResponse: function (data) {
        var array = []
        if (data) {
          for (let key in data) {
            data[ key ].code = key
            array.push(data[ key ])
          }
        }
        return array
      }
    }
  }
</script>

