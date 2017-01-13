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
            <div class="parametersContent" v-for="(value,key) in apiInfo.parameters">
              <h6>{{key}}</h6>
              <div>
                <el-table
                    :data="getParameters(value)"
                    style="width: 100%">
                  <el-table-column
                      prop="name"
                      label="Name">
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
            </div>
          </section>
          <section class="responses">
            <h4>param</h4>
            <div class="responseContent">
              <code-viewer :contents="JSON.stringify(getParameters(apiInfo.response))" :options="jsonViewOption"
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
        parameters: {},
        split: '!',
        jsonViewOption: {
          'theme': '',
          'showLineNumbers': false
        }
      }
    },
    watch: {},
    mounted () {
    },
    methods: {
      analysisKey: function (key, value) {
        function isType (val) {
          var map = [ 'string', 'number', 'boolean', 'object', 'array' ]
          return map.indexOf(val) != -1
        }

        function isRequire (val) {
          var map = [ 'true', 'false' ]
          return map.indexOf(val) != -1
        }

        function checkType (data, val) {
          if (isType(val)) {
            data.schema = val
          } else if (isRequire(val)) {
            data.required = val
          } else {
            data.description = val
          }
        }

        var vals = key.split(this.split)

        var data = {
          name: vals[ 0 ],
          schema: '',
          required: false,
          description: ''
        }
        // 动态计算参数类型。如果没有指定参数类型则尝试计算参数类型。
        if (value) {
          if (typeof value === 'object') {
            data.schema = 'object'
          }
          if (value instanceof Array) {
            data.schema = 'array'
          }
        }
        console.log(data.name, data.schema, value)

        checkType(data, vals[ 1 ])
        checkType(data, vals[ 2 ])
        checkType(data, vals[ 3 ])

        // todo 错误验证
        return data
      },
      getParameters: function (data) {
        var me = this
        var array = []

        if (!data) {
          return array
        }

        function deepWalk (data, deep) {
          var deepKey = ''
          for (var i = 0; i < deep; i++) {
            deepKey += '|----'
          }
          for (let key in data) {
            var parame = {}
            Object.assign(parame, me.analysisKey(key, data[ key ]))
            parame.name = deepKey + parame.name
            array.push(parame)
            if (typeof data[ key ] === 'object') {
              if (parame.schema == 'object') {
                deepWalk(data[ key ], deep + 1)
              } else if (parame.schema == 'array') {
                if (data[ key ][ 0 ]) {
                  deepWalk(data[ key ][ 0 ], deep + 1)
                }
              }
            }
          }
          return
        }
        deepWalk(data, 0)
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

