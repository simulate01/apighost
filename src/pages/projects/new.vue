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
                New project
              </h4>
              <p>
                Create or Import your project from popular Git services
              </p>
            </div>
            <div class="col-lg-9">
              <form class="new_project" id="new_project" action="/projects" accept-charset="UTF-8" method="post" _lpchecked="1"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="l5r48e+8tphSd8x9puM/dVMeKNfuONpIdNtXKBcpTIa64i1iQ5LsIYxu4kScWB/7SQ/vTsTAVK8qH77sqcO6hw=="><fieldset class="append-bottom-0">
                <div class="form-group col-xs-12 col-sm-6">
                  <label class="label-light" for="project_namespace_id"><span>
Project path
</span>
                  </label><div class="form-group">
                  <div class="input-group">
                    <div class="input-group-addon">
                      http://code.ymmoa.com/
                    </div>
                    <div class="select2-container select2 js-select-namespace" id="s2id_project_namespace_id" style="width: 116px;"><a href="javascript:void(0)" class="select2-choice" tabindex="-1">   <span class="select2-chosen" id="select2-chosen-10">wangkm</span><abbr class="select2-search-choice-close"></abbr>   <span class="select2-arrow" role="presentation"><b role="presentation"></b></span></a><label for="s2id_autogen10" class="select2-offscreen">
                      Project path


                      Project name

                    </label><input class="select2-focusser select2-offscreen" type="text" aria-haspopup="true" role="button" aria-labelledby="select2-chosen-10" id="s2id_autogen10" tabindex="1"><div class="select2-drop select2-display-none select2-with-searchbox">   <div class="select2-search">       <label for="s2id_autogen10_search" class="select2-offscreen">
                      Project path


                      Project name

                    </label>       <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-10" id="s2id_autogen10_search" placeholder="">   </div>   <ul class="select2-results" role="listbox" id="select2-results-10">   </ul></div></div><select class="select2 js-select-namespace" tabindex="-1" name="project[namespace_id]" id="project_namespace_id" title="
Project path


Project name

" style="display: none;"><optgroup label="Groups"><option data-options-parent="groups" value="41">cloudhorse</option>
                    <option data-options-parent="groups" value="96">component</option>
                    <option data-options-parent="groups" value="50">h5developer</option>
                    <option data-options-parent="groups" value="102">util</option></optgroup><optgroup label="Users"><option data-options-parent="users" selected="selected" value="36">wangkm</option></optgroup></select>
                  </div>
                </div>
                </div>
                <div class="form-group col-xs-12 col-sm-6 project-path">
                  <label class="label-light" for="project_namespace_id"><span>
Project name
</span>
                  </label><input placeholder="my-awesome-project" class="form-control" tabindex="2" autofocus="autofocus" required="required" type="text" name="project[path]" id="project_path">
                </div>
              </fieldset>
                <div class="help-block">
                  Want to house several dependent projects under the same namespace?
                  <a href="/groups/new">Create a group</a>
                </div>
                <div class="project-import js-toggle-container">
                  <div class="form-group clearfix">
                    <label class="label-light" for="project_visibility_level">Import project from
                    </label><div class="col-sm-12 import-buttons">
                    <div>
                      <a class="btn import_github" href="/import/github/new"><i class="fa fa-github"></i> GitHub
                      </a></div>
                    <div>
                      <a class="btn import_bitbucket how_to_import_link" data-no-turbolink="true" href="/import/bitbucket/status"><i class="fa fa-bitbucket"></i> Bitbucket
                      </a><div class="modal" id="bitbucket_import_modal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <a class="close" data-dismiss="modal" href="#">×</a>
                            <h3>Import projects from Bitbucket</h3>
                          </div>
                          <div class="modal-body">
                            To enable importing projects from Bitbucket,
                            ask your GitLab administrator to configure
                            <a href="/help/integration/bitbucket">OAuth integration</a>.
                          </div>
                        </div>
                      </div>
                    </div>

                    </div>
                    <div>
                      <a class="btn import_gitlab how_to_import_link" href="/import/gitlab/status"><i class="fa fa-gitlab"></i> GitLab.com
                      </a><div class="modal" id="gitlab_import_modal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <a class="close" data-dismiss="modal" href="#">×</a>
                            <h3>Import projects from GitLab.com</h3>
                          </div>
                          <div class="modal-body">
                            To enable importing projects from GitLab.com,
                            ask your GitLab administrator to configure
                            <a href="/help/integration/gitlab">OAuth integration</a>.
                          </div>
                        </div>
                      </div>
                    </div>

                    </div>
                    <div>
                      <a class="btn import_gitorious" href="/import/gitorious/new"><i class="icon-gitorious icon-gitorious-small"></i>
                        Gitorious.org
                      </a></div>
                    <div>
                      <a class="btn import_google_code" href="/import/google_code/new"><i class="fa fa-google"></i> Google Code
                      </a></div>
                    <div>
                      <a class="btn import_fogbugz" href="/import/fogbugz/new"><i class="fa fa-bug"></i> Fogbugz
                      </a></div>
                    <div>
                      <a class="btn js-toggle-button import_git" href="#"><i class="fa fa-git"></i> Repo by URL
                      </a></div>
                    <div class="import_gitlab_project" title="Project path and name required.">
                    </div>
                  </div>
                  </div>
                  <div class="js-toggle-content hide">
                    <div class="form-group import-url-data">
                      <label class="control-label" for="project_import_url"><span>Git repository URL</span>
                      </label><div class="col-sm-10">
                      <input class="form-control" placeholder="https://username:password@gitlab.company.com/group/project.git" disabled="disabled" type="text" name="project[import_url]" id="project_import_url">
                      <div class="well prepend-top-20">
                        <ul>
                          <li>
                            The repository must be accessible over <code>http://</code>, <code>https://</code> or <code>git://</code>.
                          </li>
                          <li>
                            If your HTTP repository is not publicly accessible, add authentication information to the URL: <code>https://username:password@gitlab.company.com/group/project.git</code>.
                          </li>
                          <li>
                            The import will time out after 15 minutes. For repositories that take longer, use a clone/push combination.
                          </li>
                          <li>
                            To migrate an SVN repository, check out <a href="http://doc.gitlab.com/ce/workflow/importing/migrating_from_svn.html">this document</a>.
                          </li>
                        </ul>
                      </div>
                    </div>
                    </div>

                  </div>
                </div>
                <div class="form-group">
                  <label class="label-light" for="project_description">Project description
                    <span class="light">(optional)</span>
                  </label><textarea placeholder="Description format" class="form-control" rows="3" maxlength="250" name="project[description]" id="project_description"></textarea>
                </div>
                <div class="form-group project-visibility-level-holder">
                  <label class="label-light" for="project_visibility_level">Visibility Level
                    <a href="/help/public_access/public_access">(?)</a>
                  </label><div class="radio">
                  <label for="project_visibility_level_0"><input type="radio" value="0" checked="checked" name="project[visibility_level]" id="project_visibility_level_0">
                    <i class="fa fa-lock fa-fw"></i>
                    <div class="option-title">
                      Private
                    </div>
                    <div class="option-descr">
                      Project access must be granted explicitly to each user.
                    </div>
                  </label></div>
                  <div class="radio">
                    <label for="project_visibility_level_10"><input type="radio" value="10" name="project[visibility_level]" id="project_visibility_level_10">
                      <i class="fa fa-shield fa-fw"></i>
                      <div class="option-title">
                        Internal
                      </div>
                      <div class="option-descr">
                        The project can be cloned by any logged in user.
                      </div>
                    </label></div>
                  <div class="radio">
                    <label for="project_visibility_level_20"><input type="radio" value="20" name="project[visibility_level]" id="project_visibility_level_20">
                      <i class="fa fa-globe fa-fw"></i>
                      <div class="option-title">
                        Public
                      </div>
                      <div class="option-descr">
                        The project can be cloned without any authentication.
                      </div>
                    </label></div>

                </div>
                <input type="submit" name="commit" value="Create project" class="btn btn-create project-submit" tabindex="4">
                <a class="btn btn-cancel" href="/dashboard/projects">Cancel</a>
              </form></div>
          </div>
        </div>
        <div class="save-project-loader hide">
          <div class="center">
            <h2>
              <i class="fa fa-spinner fa-spin"></i>
              Creating project &amp; repository.
            </h2>
            <p>Please wait a moment, this page will automatically refresh when ready.</p>
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
  import Server from 'src/extend/Server'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'projects_new',
    data () {
      return {
        // 一个典型列表数据格式
        tableInfo: {
          search: {},
          data: [],
          pagination: {
            size: 10,
            total: 0,
            curr: 0
          }
        }
      }
    },
    mounted: function () {
      this.loadData(1)
    },
    methods: {
      loadData (pageId) {
        this.tableInfo.pagination.curr = pageId
        var data = Object.assign({}, this.tableInfo.search)
        data.pageId = pageId - 1
        data.pageSize = this.tableInfo.pagination.size
        Server({
          url: 'projects',
          method: 'post',
          data: data
        }).then((response) => {
          var data = response.data
          // 设置分页信息
          this.tableInfo.pagination.total = data.totalNum
          this.tableInfo.data = data.list
        }).catch(() => {

        })
      },
      search () {
        this.loadData(this.tableInfo.pagination.curr)
      }
    }
  }
</script>
