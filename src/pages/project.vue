<template>
  <div>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="controls">
          <div class="dropdown project-settings-dropdown">
            <a class="dropdown-new btn btn-default" data-toggle="dropdown" id="project-settings-button">
              <i class="fa fa-cog"></i>
              <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-align-right">
              <li class=""><a title="Members" class="team-tab tab" href="#/project_members"><span>
Members</span> </a></li>
              <li class="divider"></li>
              <li>
                <a data-confirm="Are you sure you want to leave the &quot;chonglu.wangcl / YMM-BMP&quot; project?"
                   title="Leave project" rel="nofollow" data-method="delete"
                   href="/chonglu.wangcl/YMM-BMP/project_members/leave">Leave Project
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-control scrolling-tabs-container">
          <div class="fade-left">
            <i class="fa fa-angle-left"></i>
          </div>
          <div class="fade-right">
            <i class="fa fa-angle-right"></i>
          </div>
          <ul class="nav-links scrolling-tabs">
            <li class="home active"><a title="Project" class="shortcuts-project" href="/chonglu.wangcl/YMM-BMP"><span>
文档
</span>
            </a></li>
            <li class=""><a title="Activity" class="shortcuts-project-activity" href="/chonglu.wangcl/YMM-BMP/activity"><span>
动态
</span>
            </a></li>
            <li class="hidden">
              <a title="Network" class="shortcuts-network" href="/chonglu.wangcl/YMM-BMP/network/master">Network
              </a></li>
            <li class="hidden">
              <a class="shortcuts-new-issue" href="/chonglu.wangcl/YMM-BMP/issues/new">Create a new issue
              </a></li>
            <li class="hidden">
              <a title="Builds" class="shortcuts-builds" href="/chonglu.wangcl/YMM-BMP/builds">Builds
              </a></li>
            <li class="hidden">
              <a title="Commits" class="shortcuts-commits" href="/chonglu.wangcl/YMM-BMP/commits/master">Commits
              </a></li>
          </ul>
        </div>

      </div>
    </div>
    <div class="content-wrapper page-with-layout-nav">


      <div class="flash-container flash-container-page">
      </div>


      <div class=" ">
        <div class="content">

          <div class="project-home-panel text-center">
            <div class="container-fluid container-limited">
              <div class="project-avatar avatar s70 avatar-tile identicon"
                   style="background-color: #FBE9E7; color: #555">Y
              </div>
              <h1 class="project-title">
                项目名称
                <span class="visibility-icon has-tooltip" data-container="body"
                      title="Public - The project can be cloned without any authentication.">
<i class="fa fa-globe"></i>
</span>
              </h1>
              <div class="project-home-desc">
                <p>项目描述</p>
              </div>
              <div class="project-repo-buttons project-action-buttons">
                <div class="count-buttons">
                  <a class="btn star-btn toggle-star has-tooltip" title="Star project" data-remote="true" rel="nofollow"
                     data-method="post" href="/chonglu.wangcl/YMM-BMP/toggle_star"><i class="fa fa-star-o fa-fw"></i>
                    <span>Star</span>
                  </a>
                  <div class="count-with-arrow">
                    <span class="arrow"></span>
                    <span class="count star-count">2</span>
                  </div>
                </div>
                <div class="project-clone-holder">
                  <div class="git-clone-holder input-group">
                    <input type="text" name="project_clone" id="project_clone"
                           value="git@code.ymmoa.com:chonglu.wangcl/YMM-BMP.git" class="js-select-on-focus form-control"
                           readonly="readonly">
                    <div class="input-group-btn">
                      <button class="btn btn-clipboard" data-toggle="tooltip" data-placement="bottom"
                              data-container="body" data-clipboard-target="#project_clone" type="button"
                              title="Copy to Clipboard"><i class="fa fa-clipboard"></i></button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid container-limited">
            <ul class="paths" style="">
              <li class="path" v-for="(path,pathName) in paths">
                <header><h2><a>{{pathName}}</a></h2>
                  <a class="jump-to-yaml" tooltip-trigger="mouseenter"> </a>
                </header>
                <ul class="operations">
                  <li :class="[operationName]" class="operation" v-for="(operation,operationName) in path">
                    <header @click="$set(operation,'_showOperations',!operation._showOperations)">
                      <a class="focus-editor" tooltip-trigger="mouseenter"> </a>
                      <div class="http-method">{{operationName}} {{pathName}}</div>
                      <router-link class="edit" :to="{path:'/api_new',query:{edit:true}}">
                        <i class="el-icon-edit"></i>
                      </router-link>
                    </header>
                    <div class="content" v-if="operation._showOperations">
                      <section class="summary" v-if="operation.summary"><h4>Summary</h4>
                        <p>{{operation.summary}}</p></section>
                      <section class="description" v-if="operation.description"><h4>Description</h4>
                        <div marked="operation.description">
                          <p>{{operation.description}}</p>
                        </div>
                      </section>
                      <section class="parameters">
                        <h4>Parameters</h4>
                        <div>
                          <el-table
                              :data="operation.parameters"
                              style="width: 100%">
                            <el-table-column
                                prop="name"
                                label="Name"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="in"
                                label="Located in"
                                width="180">
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
                                inline-template
                                label="Schema">
                              <table class="schema-model">
                                <tbody>
                                <tr>
                                  <td>
                                    <a class="toggle" @click="$set(row,'_showOperations',!row._showOperations)"
                                       title="Switch to json">
                                      ⇄ </a></td>
                                  <td class="view json ng-hide" v-if="row._showOperations">
                                    <div class="json-formatter-row json-formatter-open"><a
                                        class="json-formatter-toggler-link"><span
                                        class="json-formatter-toggler"></span><span
                                        class="json-formatter-value"><span><span
                                        class="json-formatter-constructor-name">Object</span></span></span></a>
                                      <div class="json-formatter-children json-formatter-object">
                                        <div class="json-formatter-row"><a class="json-formatter-toggler-link"><span
                                            class="json-formatter-key">type:</span><span
                                            class="json-formatter-string">"number"</span></a>
                                          <div class="json-formatter-children"></div>
                                        </div>
                                        <div class="json-formatter-row"><a class="json-formatter-toggler-link"><span
                                            class="json-formatter-key">format:</span><span
                                            class="json-formatter-string">"double"</span></a>
                                          <div class="json-formatter-children"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td class="view schema" v-if="!row._showOperations">
                                    <div class="json-schema-view">
                                      <div class="primitive">
                                        <span class="type">{{row.type}}</span>
                                        <span class="format">({{row.format}})</span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </el-table-column>
                          </el-table>
                        </div>
                      </section>
                      <section class="responses">
                        <h4>Responses</h4>
                        <div>
                          <el-table
                              :data="getResponse(operation.responses)"
                              style="width: 100%">
                            <el-table-column
                                prop="code"
                                label="Code"
                                width="80">
                            </el-table-column>
                            <el-table-column
                                prop="description"
                                label="Description">
                            </el-table-column>
                            <el-table-column
                                inline-template
                                label="Schema">
                              <table class="schema-model">
                                <tbody>
                                <tr>
                                  <td><a class="toggle" @click="$set(row,'mode',!row.mode)"
                                         title="Switch to json">
                                    ⇄ </a></td>
                                  <td class="view json ng-hide" v-if="row.mode">
                                    <div class="json-formatter-row json-formatter-open"><a
                                        class="json-formatter-toggler-link"><span
                                        class="json-formatter-toggler"></span><span
                                        class="json-formatter-value"><span><span
                                        class="json-formatter-constructor-name">{{$index}}</span></span></span></a>
                                      <div class="json-formatter-children json-formatter-object">
                                        <div class="json-formatter-row"><a class="json-formatter-toggler-link"><span
                                            class="json-formatter-key">type:</span><span
                                            class="json-formatter-string">"array"</span></a>
                                          <div class="json-formatter-children"></div>
                                        </div>
                                        <div class="json-formatter-row"><a class="json-formatter-toggler-link"><span
                                            class="json-formatter-toggler"></span><span class="json-formatter-key">items:</span><span
                                            class="json-formatter-value"><span><span
                                            class="json-formatter-constructor-name">Object</span></span></span></a>
                                          <div class="json-formatter-children json-formatter-object"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td class="view schema" v-show="!row.mode">
                                    <div class="json-schema-view">
                                      <div class="array">
                                        <a class="title"><span class="toggle-handle"></span><span
                                            class="opening bracket">[</span></a>
                                        <div class="inner">
                                          <div class="json-schema-view collapsed">
                                            <div class="object">
                                              <a class="title"><span class="toggle-handle"></span>Product <span
                                                  class="opening brace">{</span>
                                                <span class="closing brace" v-if="isCollapsed">}</span>
                                              </a>
                                              <div class="inner">

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <span class="closing bracket">]</span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </el-table-column>
                          </el-table>
                        </div>
                      </section>
                      <section class="try-operation">
                        <button class="border-only try-it"> Try this operation
                        </button>
                      </section>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
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
  import data from 'src/assets/data/project'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'project',
    data: function () {
      return data
    },
    mounted: function () {

    },
    methods: {
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
