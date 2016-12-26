<template>
  <div>
    <div class="layout-nav">
      <div class="container-fluid">
        <div class="controls">
          <div class="dropdown project-settings-dropdown">
            <a class="dropdown-new btn btn-default" data-toggle="dropdown" href="#" id="project-settings-button">
              <i class="fa fa-cog"></i>
              <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-align-right">
              <li class=""><a title="Members" class="team-tab tab" href="/chonglu.wangcl/YMM-BMP/project_members"><span>
Members
</span>
              </a></li><li class=""><a title="Groups" href="/chonglu.wangcl/YMM-BMP/group_links"><span>
Groups
</span>
            </a></li><li class=""><a title="Deploy Keys" href="/chonglu.wangcl/YMM-BMP/deploy_keys"><span>
Deploy Keys
</span>
            </a></li><li class=""><a title="Webhooks" href="/chonglu.wangcl/YMM-BMP/hooks"><span>
Webhooks
</span>
            </a></li><li class=""><a title="Services" href="/chonglu.wangcl/YMM-BMP/services"><span>
Services
</span>
            </a></li><li class=""><a title="Protected Branches" href="/chonglu.wangcl/YMM-BMP/protected_branches"><span>
Protected Branches
</span>
            </a></li><li class=""><a title="Runners" href="/chonglu.wangcl/YMM-BMP/runners"><span>
Runners
</span>
            </a></li><li class=""><a title="Variables" href="/chonglu.wangcl/YMM-BMP/variables"><span>
Variables
</span>
            </a></li><li class=""><a title="Triggers" href="/chonglu.wangcl/YMM-BMP/triggers"><span>
Triggers
</span>
            </a></li><li class=""><a title="CI/CD Pipelines" href="/chonglu.wangcl/YMM-BMP/pipelines/settings"><span>
CI/CD Pipelines
</span>
            </a></li>
              <li class="divider"></li>
              <li>
                <a href="/chonglu.wangcl/YMM-BMP/edit">Edit Project
                </a></li>
              <li>
                <a data-confirm="Are you sure you want to leave the &quot;chonglu.wangcl / YMM-BMP&quot; project?" title="Leave project" rel="nofollow" data-method="delete" href="/chonglu.wangcl/YMM-BMP/project_members/leave">Leave Project
                </a></li>
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
            <li class="home"><a title="Project" class="shortcuts-project" href="/chonglu.wangcl/YMM-BMP"><span>
Project
</span>
            </a></li><li class=""><a title="Activity" class="shortcuts-project-activity" href="/chonglu.wangcl/YMM-BMP/activity"><span>
Activity
</span>
          </a></li><li class="active"><a title="Repository" class="shortcuts-tree" href="/chonglu.wangcl/YMM-BMP/tree/master"><span>
Repository
</span>
          </a></li><li class=""><a title="Pipelines" class="shortcuts-pipelines" href="/chonglu.wangcl/YMM-BMP/pipelines"><span>
Pipelines
</span>
          </a></li><li class=""><a title="Graphs" class="shortcuts-graphs" href="/chonglu.wangcl/YMM-BMP/graphs/master"><span>
Graphs
</span>
          </a></li><li class=""><a title="Issues" class="shortcuts-issues" href="/chonglu.wangcl/YMM-BMP/issues"><span>
Issues
<span class="badge count issue_counter">0</span>
</span>
          </a></li><li class=""><a title="Merge Requests" class="shortcuts-merge_requests" href="/chonglu.wangcl/YMM-BMP/merge_requests"><span>
Merge Requests
<span class="badge count merge_counter">0</span>
</span>
          </a></li><li class=""><a title="Wiki" class="shortcuts-wiki" href="/chonglu.wangcl/YMM-BMP/wikis/home"><span>
Wiki
</span>
          </a></li><li class=""><a title="Snippets" class="shortcuts-snippets" href="/chonglu.wangcl/YMM-BMP/snippets"><span>
Snippets
</span>
          </a></li><li class="hidden">
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
          <div class="scrolling-tabs-container sub-nav-scroll">
            <div class="fade-left">
              <i class="fa fa-angle-left"></i>
            </div>
            <div class="fade-right">
              <i class="fa fa-angle-right"></i>
            </div>
            <div class="nav-links sub-nav scrolling-tabs">
              <ul class="container-fluid container-limited">
                <li class="active"><a href="/chonglu.wangcl/YMM-BMP/tree/master">Files
                </a></li><li class=""><a href="/chonglu.wangcl/YMM-BMP/commits/master">Commits
              </a></li><li class=""><a href="/chonglu.wangcl/YMM-BMP/network/master">Network
              </a></li><li class=""><a href="/chonglu.wangcl/YMM-BMP/compare?from=master&amp;to=master">Compare
              </a></li><li class=""><a href="/chonglu.wangcl/YMM-BMP/branches">Branches
              </a></li><li class=""><a href="/chonglu.wangcl/YMM-BMP/tags">Tags
              </a></li></ul>
            </div>
          </div>

          <div class="container-fluid container-limited">

            <div class="tree-holder" id="tree-holder">
              <div class="nav-block">
                <div class="tree-ref-holder">
                  <form class="project-refs-form" action="/chonglu.wangcl/YMM-BMP/refs/switch" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="destination" id="destination" value="blob">
                    <input type="hidden" name="path" id="path" value=".gitignore">
                    <div class="dropdown">
                      <button class="dropdown-menu-toggle js-project-refs-dropdown" type="button" data-toggle="dropdown" data-selected="master" data-ref="master" data-refs-url="/chonglu.wangcl/YMM-BMP/refs" aria-expanded="false"><span class="dropdown-toggle-text">master</span><i class="fa fa-chevron-down"></i></button>
                      <div class="dropdown-menu dropdown-menu-selectable">
                        <div class="dropdown-title"><span>Switch branch/tag</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
                        <div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search branches and tags" autocomplete="off" value=""><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
                        <div class="dropdown-content"><ul><li class="dropdown-header">Branches</li><li><a href="#" data-ref="20160517_JK">20160517_JK</a></li><li><a href="#" data-ref="20160531_JK_Bugs">20160531_JK_Bugs</a></li><li><a href="#" data-ref="20160603_QXJ">20160603_QXJ</a></li><li><a href="#" data-ref="20160621_wmy">20160621_wmy</a></li><li><a href="#" data-ref="20160622_QXJ">20160622_QXJ</a></li><li><a href="#" data-ref="20160627_QXJ">20160627_QXJ</a></li><li><a href="#" data-ref="20160708_wmy">20160708_wmy</a></li><li><a href="#" data-ref="20160711sherry">20160711sherry</a></li><li><a href="#" data-ref="20160714_zx">20160714_zx</a></li><li><a href="#" data-ref="20160719_JK_Blacklist">20160719_JK_Blacklist</a></li><li><a href="#" data-ref="20160721_deposit">20160721_deposit</a></li><li><a href="#" data-ref="20160722_PAR">20160722_PAR</a></li><li><a href="#" data-ref="20160725_QXJ">20160725_QXJ</a></li><li><a href="#" data-ref="20160802_JK_Logs">20160802_JK_Logs</a></li><li><a href="#" data-ref="20160802_verify">20160802_verify</a></li><li><a href="#" data-ref="20160805_systemMonitor">20160805_systemMonitor</a></li><li><a href="#" data-ref="20160811_zx">20160811_zx</a></li><li><a href="#" data-ref="20160812_bugHD">20160812_bugHD</a></li><li><a href="#" data-ref="20160815_JK_BlackListReason">20160815_JK_BlackListReason</a></li><li><a href="#" data-ref="20160815_abnormalNum">20160815_abnormalNum</a></li><li><a href="#" data-ref="20160818_drivercertificate">20160818_drivercertificate</a></li><li><a href="#" data-ref="20160818_verify%28zx%29">20160818_verify(zx)</a></li><li><a href="#" data-ref="20160901_point">20160901_point</a></li><li><a href="#" data-ref="20160902_adLocation">20160902_adLocation</a></li><li><a href="#" data-ref="20160909_carImgSize">20160909_carImgSize</a></li><li><a href="#" data-ref="20160912_adverImgSize">20160912_adverImgSize</a></li><li><a href="#" data-ref="20160913_rechargeDrawBack">20160913_rechargeDrawBack</a></li><li><a href="#" data-ref="20160919_rechargeBill">20160919_rechargeBill</a></li><li><a href="#" data-ref="20160921_adAppType">20160921_adAppType</a></li><li><a href="#" data-ref="20161010_select">20161010_select</a></li><li><a href="#" data-ref="20161010_wcl">20161010_wcl</a></li><li><a href="#" data-ref="20161013_complain">20161013_complain</a></li><li><a href="#" data-ref="20161025_addReaders">20161025_addReaders</a></li><li><a href="#" data-ref="20161027_advertCity">20161027_advertCity</a></li><li><a href="#" data-ref="20161027_verify">20161027_verify</a></li><li><a href="#" data-ref="20161028_coupon">20161028_coupon</a></li><li><a href="#" data-ref="20161031_1yuan">20161031_1yuan</a></li><li><a href="#" data-ref="20161031_dataQuery">20161031_dataQuery</a></li><li><a href="#" data-ref="20161103_moduleBug">20161103_moduleBug</a></li><li><a href="#" data-ref="20161116_advert">20161116_advert</a></li><li><a href="#" data-ref="20161117_AccountBill">20161117_AccountBill</a></li><li><a href="#" data-ref="20161117_Message">20161117_Message</a></li><li><a href="#" data-ref="20161118_coupon_update">20161118_coupon_update</a></li><li><a href="#" data-ref="20161129_couponIssued">20161129_couponIssued</a></li><li><a href="#" data-ref="2016116_customerServer">2016116_customerServer</a></li><li><a href="#" data-ref="20161201_auditPage">20161201_auditPage</a></li><li><a href="#" data-ref="20161207_addOwner">20161207_addOwner</a></li><li><a href="#" data-ref="20161208_shopDrawback">20161208_shopDrawback</a></li><li><a href="#" data-ref="20161209_blackOwner">20161209_blackOwner</a></li><li><a href="#" data-ref="20161214_selectStore">20161214_selectStore</a></li><li><a href="#" data-ref="2016125_fxz_dakuan-new">2016125_fxz_dakuan-new</a></li><li><a href="#" data-ref="2016126_wkm_shengheLayz">2016126_wkm_shengheLayz</a></li><li><a href="#" data-ref="backTo7/19">backTo7/19</a></li><li><a href="#" data-ref="beta">beta</a></li><li><a href="#" data-ref="dev">dev</a></li><li><a href="#" data-ref="feature_finance">feature_finance</a></li><li><a href="#" class="is-active" data-ref="master">master</a></li><li><a href="#" data-ref="sherry0601">sherry0601</a></li><li class="dropdown-header">Tags</li><li><a href="#" data-ref="20161027-%u8D27%u6E90%u7EFC%u5408%u6295%u8BC9%u5904%u7406">20161027-货源综合投诉处理</a></li><li><a href="#" data-ref="20160913">20160913</a></li><li><a href="#" data-ref="20160907-%u5BA1%u6838%u5347%u7EA71">20160907-审核升级1</a></li><li><a href="#" data-ref="20160907-%u5BA1%u6838%u5347%u7EA7">20160907-审核升级</a></li><li><a href="#" data-ref="20160830-%u5BA1%u6838%u9700%u6C42%u4E0A%u7EBF">20160830-审核需求上线</a></li><li><a href="#" data-ref="20160825">20160825</a></li><li><a href="#" data-ref="2016.09.01--%u5BA1%u6838-%u56FE%u7247%u683C%u5F0Fjxx%u3001%u52A0%u8F7D%u5931%u8D25%u5904%u7406">2016.09.01--审核-图片格式jxx、加载失败处理</a></li></ul></div>
                        <div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
                      </div>
                    </div>
                  </form>
                </div>
                <ul class="breadcrumb repo-breadcrumb">
                  <li>
                    <a href="/chonglu.wangcl/YMM-BMP/tree/master">YMM-BMP
                    </a></li>
                  <li>
                    <a href="/chonglu.wangcl/YMM-BMP/blob/master/.gitignore"><strong>
                      .gitignore
                    </strong>
                    </a></li>
                </ul>
              </div>
              <ul class="blob-commit-info hidden-xs">
                <li class="commit js-toggle-container" id="commit-27ffa3c8">
                  <a href="/u/chonglu.wangcl"><img class="avatar has-tooltip hidden-xs s36" alt="chonglu.wangcl's avatar" title="chonglu.wangcl" src="http://secure.gravatar.com/avatar/3f9f24944d5699fa5c952288b6aa0c78?s=72&amp;d=identicon"></a>
                  <div class="commit-info-block">
                    <div class="commit-row-title">
<span class="item-title">
<a class="commit-row-message" href="/chonglu.wangcl/YMM-BMP/commit/27ffa3c842cf1fd00d2d5152131bd972792136e7">打包上传到ftp工具</a>
<span class="commit-row-message visible-xs-inline">
·
27ffa3c8
</span>
</span>
                      <div class="commit-actions hidden-xs">
                        <button class="btn btn-clipboard" data-toggle="tooltip" data-placement="bottom" data-container="body" data-clipboard-text="27ffa3c842cf1fd00d2d5152131bd972792136e7" type="button" title="Copy to Clipboard"><i class="fa fa-clipboard"></i></button>
                        <a class="commit-short-id btn btn-transparent" href="/chonglu.wangcl/YMM-BMP/commit/27ffa3c842cf1fd00d2d5152131bd972792136e7">27ffa3c8</a>

                      </div>
                    </div>
                    <div class="commit-row-info">
                      <a class="commit-author-link has-tooltip" title="chonglu.wangcl@ymm56.com" href="/u/chonglu.wangcl">chonglu.wangcl</a>
                      authored
                      <time class="js-timeago" datetime="2016-08-15T08:06:01Z" title="" data-toggle="tooltip" data-placement="top" data-container="body" data-original-title="Aug 15, 2016 4:06pm GMT+0800">4 months ago</time>
                    </div>
                  </div>
                </li>

              </ul>
              <div class="blob-content-holder" id="blob-content-holder">
                <article class="file-holder">
                  <div class="file-title">
                    <i class="fa fa-file-text-o fa-fw"></i>
                    <strong>
                      .gitignore
                    </strong>
                    <small>
                      91 Bytes
                    </small>
                    <div class="file-actions hidden-xs">
                      <div class="btn-group tree-btn-group">
                        <a class="btn btn-sm" target="_blank" href="/chonglu.wangcl/YMM-BMP/raw/master/.gitignore">Raw</a>
                        <a class="btn btn-sm" href="/chonglu.wangcl/YMM-BMP/blame/master/.gitignore">Blame</a>
                        <a class="btn btn-sm" href="/chonglu.wangcl/YMM-BMP/commits/master/.gitignore">History</a>
                        <a class="btn btn-sm" href="/chonglu.wangcl/YMM-BMP/blob/b1a97153f50c2b03b108c8d4f2f28eaaaf9c69c5/.gitignore">Permalink</a>
                      </div>
                      <div class="btn-group" role="group">
                        <a class="btn btn-sm" href="/chonglu.wangcl/YMM-BMP/edit/master/.gitignore">Edit</a>
                        <button name="button" type="submit" class="btn btn-default" data-target="#modal-upload-blob" data-toggle="modal">Replace</button>
                        <button name="button" type="submit" class="btn btn-remove" data-target="#modal-remove-blob" data-toggle="modal">Delete</button>
                      </div>

                    </div>
                  </div>
                  <div class="file-content code js-syntax-highlight monokai">
                    <div class="line-numbers">
                      <a class="diff-line-num" data-line-number="1" href="#L1" id="L1">
                        <i class="fa fa-link"></i>
                        1
                      </a>
                      <a class="diff-line-num" data-line-number="2" href="#L2" id="L2">
                        <i class="fa fa-link"></i>
                        2
                      </a>
                      <a class="diff-line-num" data-line-number="3" href="#L3" id="L3">
                        <i class="fa fa-link"></i>
                        3
                      </a>
                      <a class="diff-line-num" data-line-number="4" href="#L4" id="L4">
                        <i class="fa fa-link"></i>
                        4
                      </a>
                      <a class="diff-line-num" data-line-number="5" href="#L5" id="L5">
                        <i class="fa fa-link"></i>
                        5
                      </a>
                      <a class="diff-line-num" data-line-number="6" href="#L6" id="L6">
                        <i class="fa fa-link"></i>
                        6
                      </a>
                      <a class="diff-line-num" data-line-number="7" href="#L7" id="L7">
                        <i class="fa fa-link"></i>
                        7
                      </a>
                      <a class="diff-line-num" data-line-number="8" href="#L8" id="L8">
                        <i class="fa fa-link"></i>
                        8
                      </a>
                      <a class="diff-line-num" data-line-number="9" href="#L9" id="L9">
                        <i class="fa fa-link"></i>
                        9
                      </a>
                      <a class="diff-line-num" data-line-number="10" href="#L10" id="L10">
                        <i class="fa fa-link"></i>
                        10
                      </a>
                      <a class="diff-line-num" data-line-number="11" href="#L11" id="L11">
                        <i class="fa fa-link"></i>
                        11
                      </a>
                      <a class="diff-line-num" data-line-number="12" href="#L12" id="L12">
                        <i class="fa fa-link"></i>
                        12
                      </a>
                      <a class="diff-line-num" data-line-number="13" href="#L13" id="L13">
                        <i class="fa fa-link"></i>
                        13
                      </a>
                      <a class="diff-line-num" data-line-number="14" href="#L14" id="L14">
                        <i class="fa fa-link"></i>
                        14
                      </a>
                      <a class="diff-line-num" data-line-number="15" href="#L15" id="L15">
                        <i class="fa fa-link"></i>
                        15
                      </a>
                    </div>
                    <div class="blob-content" data-blob-id="a702a7ff10984020c179f7de3f2492cc7cc10ad5">
<pre class="code highlight"><code><span id="LC1" class="line">/.idea</span>
<span id="LC2" class="line">*.swp</span>
<span id="LC3" class="line">.DS_Store</span>
<span id="LC4" class="line">._*</span>
<span id="LC5" class="line"></span>
<span id="LC6" class="line">*.tmp</span>
<span id="LC7" class="line">*.temp</span>
<span id="LC8" class="line"></span>
<span id="LC9" class="line">node_modules</span>
<span id="LC10" class="line">npm-debug.log</span>
<span id="LC11" class="line"></span>
<span id="LC12" class="line">/temp</span>
<span id="LC13" class="line">/output</span>
<span id="LC14" class="line">/dist</span>
<span id="LC15" class="line"></span></code></pre>
                    </div>
                  </div>


                </article>
              </div>

            </div>
            <div class="modal" id="modal-remove-blob">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <a class="close" data-dismiss="modal" href="#">×</a>
                    <h3 class="page-title">Delete .gitignore</h3>
                  </div>
                  <div class="modal-body">
                    <form class="form-horizontal js-replace-blob-form js-quick-submit js-requires-input" action="/chonglu.wangcl/YMM-BMP/blob/master/.gitignore" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="delete"><input type="hidden" name="authenticity_token" value="HibhzrCBT8yaibiatpU7LFPC6V2aIIYRMO0Y4M9OxvgzXjRdHK8VdUSQlqOMLhuiSdMuxLDYCPZuKfEkcaQw+Q=="><div class="form-group commit_message-group">
                      <label class="control-label" for="commit_message-1280d7adad97eab11cd53628db223054">Commit message
                      </label><div class="col-sm-10">
                      <div class="commit-message-container">
                        <div class="max-width-marker"></div>
                        <textarea name="commit_message" id="commit_message-1280d7adad97eab11cd53628db223054" class="form-control js-commit-message" placeholder="Delete .gitignore" required="required" rows="3">Delete .gitignore</textarea>
                      </div>
                    </div>
                    </div>

                      <div class="form-group branch">
                        <label class="control-label" for="target_branch">Target branch</label>
                        <div class="col-sm-10">
                          <input type="text" name="target_branch" id="target_branch" value="master" required="required" class="form-control js-target-branch">
                          <div class="js-create-merge-request-container" style="display: none;">
                            <div class="checkbox">
                              <label for="create_merge_request-bc9764fcddcda086145886f49b8c5d14"><input type="checkbox" name="create_merge_request" id="create_merge_request-bc9764fcddcda086145886f49b8c5d14" value="1" class="js-create-merge-request" checked="checked">
                                Start a <strong>new merge request</strong> with these changes
                              </label></div>
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch">

                      <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                          <button name="button" type="submit" class="btn btn-remove btn-remove-file">Delete file</button>
                          <a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
                        </div>
                      </div>
                    </form></div>
                </div>
              </div>
            </div>


            <div class="modal" id="modal-upload-blob">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <a class="close" data-dismiss="modal" href="#">×</a>
                    <h3 class="page-title">Replace .gitignore</h3>
                  </div>
                  <div class="modal-body">
                    <form class="js-quick-submit js-upload-blob-form form-horizontal" action="/chonglu.wangcl/YMM-BMP/update/master/.gitignore" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="authenticity_token" value="HibhzrCBT8yaibiatpU7LFPC6V2aIIYRMO0Y4M9OxvgzXjRdHK8VdUSQlqOMLhuiSdMuxLDYCPZuKfEkcaQw+Q=="><div class="dropzone dz-clickable">
                      <div class="dropzone-previews blob-upload-dropzone-previews">
                        <p class="dz-message light">
                          Attach a file by drag &amp; drop or
                          <a class="markdown-selector" href="#">click to upload</a>
                        </p>
                      </div>
                    </div>
                      <br>
                      <div class="alert alert-danger data dropzone-alerts" style="display:none"></div>
                      <div class="form-group commit_message-group">
                        <label class="control-label" for="commit_message-0d78cef5c51f3160515ecfa27dc8a1e7">Commit message
                        </label><div class="col-sm-10">
                        <div class="commit-message-container">
                          <div class="max-width-marker"></div>
                          <textarea name="commit_message" id="commit_message-0d78cef5c51f3160515ecfa27dc8a1e7" class="form-control js-commit-message" placeholder="Replace .gitignore" required="required" rows="3">Replace .gitignore</textarea>
                        </div>
                      </div>
                      </div>

                      <div class="form-group branch">
                        <label class="control-label" for="target_branch">Target branch</label>
                        <div class="col-sm-10">
                          <input type="text" name="target_branch" id="target_branch" value="master" required="required" class="form-control js-target-branch">
                          <div class="js-create-merge-request-container" style="display: none;">
                            <div class="checkbox">
                              <label for="create_merge_request-855ebb1abe00287e5d955168838c10cb"><input type="checkbox" name="create_merge_request" id="create_merge_request-855ebb1abe00287e5d955168838c10cb" value="1" class="js-create-merge-request" checked="checked">
                                Start a <strong>new merge request</strong> with these changes
                              </label></div>
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="original_branch" id="original_branch" value="master" class="js-original-branch">

                      <div class="form-actions">
                        <button name="button" type="submit" class="btn btn-small btn-create btn-upload-file" id="submit-all">Replace file</button>
                        <a class="btn btn-cancel" data-dismiss="modal" href="#">Cancel</a>
                      </div>
                    </form></div>
                </div>
              </div>
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
