<template>
  <div>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="controls">
          <el-dropdown>
            <el-button type="primary">
              <i class="el-icon-setting"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="nav-control scrolling-tabs-container">
          <el-tabs class="nav-links" v-model="activeName" @tab-click="tabHandleClick">
            <el-tab-pane label="文档" name="doc"></el-tab-pane>
            <el-tab-pane label="成员" name="member"></el-tab-pane>
            <el-tab-pane label="接口" name="apis"></el-tab-pane>
            <el-tab-pane label="设置" name="setting"></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class="content-wrapper page-with-layout-nav">
      <div class="container-fluid container-limited ">
      <div class="content">
        <div v-if="activeName==='doc'">
          <div class="project-home-panel text-center">
            <div class="container-fluid container-limited">
              <h1 class="project-title">
                shareDown
              </h1>
              <div class="project-home-desc">
                <p>二维码分享下载</p>
              </div>
              <div class="project-repo-buttons project-action-buttons">
                <div class="count-buttons">
                  <el-button>
                    关注<i class="el-icon-star-off"></i>
                  </el-button>
                  <el-input class="url" placeholder="请输入内容" v-model="input5">
                    <el-button slot="append" class="btn">
                      <i class="ifont icon-copy"></i>
                    </el-button>
                  </el-input>
                </div>
              </div>
            </div>
          </div>
          <nav class="container-fluid container-limited project-tag">
            <el-tag>标签一</el-tag>
            <el-tag type="gray">标签二</el-tag>
            <el-tag type="primary">标签三</el-tag>
            <el-tag type="success">标签四</el-tag>
            <el-tag type="warning">标签五</el-tag>
            <el-tag type="danger">标签六</el-tag>

          </nav>
          <div class="container-fluid container-limited">
            <div v-for="item in apiList">
              <div class="apiItem">
                <div class="header clearfix">
                  <div class="nav">
                    <span class="type" :class="[item.type]">{{item.type}}</span> <span class="path">{{item.path}}</span>
                  </div>
                  <span class="controls">
                    <el-button type="primary" size="small" icon="edit">
                      编辑
                    </el-button>
                    <el-button type="primary" size="small">MOCK<i class="ifont icon-mock"></i> </el-button>
                  </span>
                </div>
                <div>
                  <!--<doc-viewer :apiInfo="getApiInfo(content)"></doc-viewer>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activeName==='member'">
          <member></member>
        </div>
        <div v-if="activeName==='apis'">
          <!--接口列表信息-->

          <!--接口列表信息/-->
        </div>
        <div v-if="activeName==='setting'">
          <div class="project-edit-container">
            <div class="row prepend-top-default">
              <div class="col-lg-3 profile-settings-sidebar">
                <h4 class="prepend-top-0">
                  Project settings
                </h4>
              </div>
              <div class="col-lg-9">
                <div class="project-edit-errors"></div>
                <form class="edit-project" id="edit_project_50" enctype="multipart/form-data" action="/h5developer/cloudhorse" accept-charset="UTF-8" data-remote="true" method="post"><fieldset class="append-bottom-0">
                  <div class="form-group">
                    <label class="label-light" for="project_name">Project name
                    </label><input class="form-control" id="project_name_edit" type="text" value="cloudhorse" name="project[name]" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                  </div>
                  <div class="form-group">
                    <label class="label-light" for="project_description">Project description
                      <span class="light">(optional)</span>
                    </label><textarea class="form-control" rows="3" maxlength="250" name="project[description]" id="project_description">云马客服项目</textarea>
                  </div>
                </fieldset>

                  <input type="submit" name="commit" value="Save changes" class="btn btn-save">
                </form></div>
            </div>
            <div class="row prepend-top-default"></div>
            <hr>






            <div class="row prepend-top-default">
              <div class="col-lg-3">
                <h4 class="prepend-top-0 warning-title">
                  Rename repository
                </h4>
              </div>
              <div class="col-lg-9">


                <form class="edit_project" id="edit_project_50" action="/h5developer/cloudhorse" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><input type="hidden" name="authenticity_token" value="8C+iN3H8KxqOXUMQeu7Zb9KUa8DQUEtVTRWJ3e9i2mJJ3raC28C9387DY2NEGQY8WeoTLVYgdmWAC2CJxvt8Lg=="><div class="form-group project_name_holder">
                  <label class="label-light" for="project_name">Project name
                  </label><div class="form-group">
                  <input class="form-control" type="text" value="cloudhorse" name="project[name]" id="project_name">
                </div>
                </div>
                  <div class="form-group">
                    <label class="label-light" for="project_path"><span>Path</span>
                    </label><div class="form-group">
                    <div class="input-group">
                      <div class="input-group-addon">
                        http://code.ymmoa.com/h5developer/
                      </div>
                      <input class="form-control" type="text" value="cloudhorse" name="project[path]" id="project_path">
                    </div>
                  </div>
                    <ul>
                      <li>Be careful. Renaming a project's repository can have unintended side effects.</li>
                      <li>You will need to update your local repositories to point to the new location.</li>
                    </ul>
                  </div>
                  <input type="submit" name="commit" value="Rename project" class="btn btn-warning">
                </form></div>
            </div>
            <hr>
            <div class="row prepend-top-default">
              <div class="col-lg-3">
                <h4 class="prepend-top-0 danger-title">
                  Transfer project
                </h4>
              </div>
              <div class="col-lg-9">
                <form class="edit_project" action="/h5developer/cloudhorse/transfer" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="put"><div class="form-group">
                  <label class="label-light" for="new_namespace_id"><span>Namespace</span>
                  </label><div class="form-group">
                  <div class="select2-container select2" id="s2id_new_namespace_id" style="width: 205px;"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-4">h5developer</span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen4" class="select2-offscreen">Namespace
                  </label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-4" id="s2id_autogen4"><div class="select2-drop select2-display-none select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen4_search" class="select2-offscreen">Namespace
                  </label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-4" id="s2id_autogen4_search" placeholder="">   </div>   <ul class="select2-results" role="listbox" id="select2-results-4">   </ul></div></div><select name="new_namespace_id" id="new_namespace_id" class="select2" tabindex="-1" title="Namespace
" style="display: none;"><option value="">Choose a project namespace</option><optgroup label="Groups"><option data-options-parent="groups" value="41">cloudhorse</option>
                  <option data-options-parent="groups" value="96">component</option>
                  <option data-options-parent="groups" selected="selected" value="50">h5developer</option>
                  <option data-options-parent="groups" value="102">util</option></optgroup><optgroup label="Users"><option data-options-parent="users" value="36">王坤明</option></optgroup></select>
                </div>
                  <ul>
                    <li>Be careful. Changing the project's namespace can have unintended side effects.</li>
                    <li>You can only transfer the project to namespaces you manage.</li>
                    <li>You will need to update your local repositories to point to the new location.</li>
                    <li>Project visibility level will be changed to match namespace rules when transfering to a group.</li>
                  </ul>
                </div>
                  <input type="submit" name="commit" value="Transfer project" class="btn btn-remove js-confirm-danger" data-confirm-danger-message="You are going to transfer h5developer / cloudhorse to another owner. Are you ABSOLUTELY sure?">
                </form></div>
            </div>
            <hr>
            <div class="row prepend-top-default append-bottom-default">
              <div class="col-lg-3">
                <h4 class="prepend-top-0 danger-title">
                  Remove project
                </h4>
                <p class="append-bottom-0">
                  Removing the project will delete its repository and all related resources including issues, merge requests etc.
                </p>
              </div>
              <div class="col-lg-9">
                <form action="/h5developer/cloudhorse" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="delete"><input type="hidden" name="authenticity_token" value="zRey1MX7zu6lJeiFRbH9G0YGpw1LSZ1r5gf7iHtDc3905qZhb8dYK+W7yPZ7RiJIzXjf4M05oFsrGRLcUtrVMw=="><p>
                  <strong>Removed projects cannot be restored!</strong>
                </p>
                  <input class="btn btn-remove js-confirm-danger" data-confirm-danger-message="You are going to remove h5developer / cloudhorse.
 Removed project CANNOT be restored!
 Are you ABSOLUTELY sure?" type="submit" value="Remove project"><input type="hidden" name="authenticity_token" value="tbws4z1M978f/YukCHMYbPiBfldUfVDujbCoENZNuEYMTThWl3Bhel9jq9c2hMc/c/8GutINbd5ArkFE/9QeCg=="></form>
              </div>
            </div>
          </div>
        </div>
      </div></div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/css">
  .url
    width 400px

  .project-tag
    margin 20px auto
    padding 10px
    border 1px dashed #ddd

  .content-wrapper
    .apiItem
      .header
        margin 10px
        clear both
        border 1px solid #dddddd
        padding 5px 20px
        box-sizing content-box
        .nav
          float left
        .controls
          float: right;
          padding: 10px 0;
</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import data from 'src/assets/data/project'
  import Server from 'src/extend/Server'
  import Member from './projects/members.vue'
  import Clipboard from 'clipboard'
  import DocViewer from 'src/components/DocViewer'
  import jsYaml from 'js-yaml'

  export default{
    mixins: [ BasePage ],
    components: { Member, DocViewer },
    name: 'project',
    data: function () {
      return {
        content: `path: /name
type: get
description: 获取用fdsafdsa户姓名
parameters:
  body:
    good:
      - name: good
        age: 123
    id!number!true!好多描述信息哈哈哈:
    name!string!good:
    pet:
      id!number!true!haoduo:
      name!string!good:
  path:
    name:
  query:
responses:
  200:
    pageSize: int
    list:
      - name: int|描述
        url: string|描述
        pets:
          - $ref: $Pet
        age: int
  500:
    code: int
    error: string
definitions:
  Pet:
    product_id: string|Unique identifier
    description: string|Description of product.
`,
        apiList: [],
        project: data,
        activeName: 'doc'
      }
    },
    mounted: function () {
      var me = this
      new Clipboard('.btn', {
        text: function () {
          me.$message('复制成功')
          return me.project.description
        }
      })
      this.loadApis()
    },
    methods: {
      getApiInfo: function (data) {
        var apiInfo = {}
        try {
          apiInfo = jsYaml.safeLoad(data)
        } catch (e) {
          apiInfo = {}
        } finally {
        }
        return apiInfo
      },
      loadApis: function () {
        Server({
          url: 'api/list/1',
          method: 'get'
        }).then((response) => {
          var data = response.data
          // 设置分页信息
          this.apiList = data.list
        }).catch(() => {

        })
      },
      tabHandleClick (tab) {
        this.activeName = tab.name
      }
    }
  }
</script>
