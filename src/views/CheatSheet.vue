<template>
<!-- eslint-disable -->
<body>
  <div id="doc" class="markdown-body container-fluid comment-enabled" style="position: relative;">
    <h2 id="VSCode0" style>
      <a class="anchor hidden-xs" href="#VSCode0" title="VSCode0">
        <span class="octicon octicon-link"></span>
      </a>VSCode
    </h2>
    <h3 id="VSCodeを開く" style>
      <a class="anchor hidden-xs" href="#VSCodeを開く" title="VSCodeを開く">
        <span class="octicon octicon-link"></span>
      </a>VSCodeを開く
    </h3>
    <pre><code class="command hljs"><span class="hljs-meta">$</span><span class="bash"> code &lt;PATH&gt;</span>

(example)
<span class="hljs-meta">
#</span><span class="bash"> カレントディレクトリがプロジェクトのディレクトリの状態で入力する</span>
<span class="hljs-meta">$</span><span class="bash"> code .</span>
</code></pre>
    <h2 id="Git" style>
      <a class="anchor hidden-xs" href="#Git" title="Git">
        <span class="octicon octicon-link"></span>
      </a>Git
    </h2>
    <h3 id="作業ディレクトリから任意のファイルをステージングする" style>
      <a
        class="anchor hidden-xs"
        href="#作業ディレクトリから任意のファイルをステージングする"
        title="作業ディレクトリから任意のファイルをステージングする"
      >
        <span class="octicon octicon-link"></span>
      </a>作業ディレクトリから任意のファイルをステージングする
    </h3>
    <pre><code class="command hljs">$ git <span class="hljs-keyword">add</span><span class="bash"> &lt;PATH&gt;
</span>
(example)

<span class="hljs-comment"># src/example.htmlをステージング</span>
$ git <span class="hljs-keyword">add</span><span class="bash"> src/example.html
</span>
<span class="hljs-comment"># カレントディレクトリ以下のすべてのファイルをステージング</span>
$ git <span class="hljs-keyword">add</span><span class="bash"> .
</span></code></pre>
    <h3 id="ローカルリポジトリにコミットする" style>
      <a class="anchor hidden-xs" href="#ローカルリポジトリにコミットする" title="ローカルリポジトリにコミットする">
        <span class="octicon octicon-link"></span>
      </a>ローカルリポジトリにコミットする
    </h3>
    <pre><code class="command hljs"><span class="hljs-meta">$</span><span class="bash"> git commit -m &lt;comment&gt;</span>

(example)
<span class="hljs-meta">
$</span><span class="bash"> git commit -m <span class="hljs-string">"○○に××の機能を追加"</span></span>
</code></pre>
    <h3 id="リモートリポジトリにpushする" style>
      <a class="anchor hidden-xs" href="#リモートリポジトリにpushする" title="リモートリポジトリにpushする">
        <span class="octicon octicon-link"></span>
      </a>リモートリポジトリにpushする
    </h3>
    <pre><code class="command hljs">$ git <span class="hljs-built_in">push</span> &lt;RepositoryName&gt; &lt;BranchName&gt;

(<span class="hljs-built_in">example</span>)
# <span class="hljs-built_in">origin</span>リポジトリのmasterブランチに<span class="hljs-built_in">push</span>する(ハッカソン中はこれでOK)
$ git <span class="hljs-built_in">push</span> <span class="hljs-built_in">origin</span> master
</code></pre>
    <h3 id="リモートリポジトリからpullする" style>
      <a class="anchor hidden-xs" href="#リモートリポジトリからpullする" title="リモートリポジトリからpullする">
        <span class="octicon octicon-link"></span>
      </a>リモートリポジトリからpullする
    </h3>
    <pre><code class="command hljs"><span class="hljs-meta">$</span><span
  class="bash"
> git pull &lt;RepositoryName&gt; &lt;BranchName&gt;</span>

(example)
<span class="hljs-meta">#</span><span class="bash"> originリポジトリのmasterブランチにpullする(ハッカソン中はこれでOK)</span>
<span class="hljs-meta">$</span><span class="bash"> git pull origin master</span>
</code></pre>
    <h3 id="差分を確認する" style>
      <a class="anchor hidden-xs" href="#差分を確認する" title="差分を確認する">
        <span class="octicon octicon-link"></span>
      </a>差分を確認する
    </h3>
    <pre><code class="command hljs"><span class="hljs-meta">$</span><span class="bash"> git diff　&lt;VariousOptions&gt;</span>

(example)
<span class="hljs-meta">#</span><span class="bash"> 作業ディレクトリとステージングの差分を確認する(addする前にやりましょう)</span>
<span class="hljs-meta">$</span><span class="bash"> git　diff</span>
<span class="hljs-meta">
#</span><span
  class="bash"
> ローカルリポジトリの最新コミットとoriginリポジトリのmasterブランチとの差分を確認する(ハッカソン中はこれでOK)(pullする前にやりましょう)</span>
<span class="hljs-meta">$</span><span class="bash"> git　diff HEAD..origin/master</span>
</code></pre>
    <h3 id="コミット履歴を確認する" style>
      <a class="anchor hidden-xs" href="#コミット履歴を確認する" title="コミット履歴を確認する">
        <span class="octicon octicon-link"></span>
      </a>コミット履歴を確認する
    </h3>
    <pre><code class="command hljs"><span class="hljs-meta">$</span><span class="bash">　git <span class="hljs-built_in">log</span> &lt;VariousOptions&gt;</span>

(example)
<span class="hljs-meta">#</span><span class="bash"> コミット履歴を確認</span>
<span class="hljs-meta">$</span><span class="bash"> git　<span class="hljs-built_in">log</span></span>
<span class="hljs-meta">
#</span><span class="bash"> いい感じに見やすいコミット履歴を確認</span>
<span class="hljs-meta">$</span><span class="bash"> git <span class="hljs-built_in">log</span> --oneline --graph --decorate</span>
<span class="hljs-meta">
#</span><span class="bash"> コミット履歴ごと＆ファイルごとの追加・削除行数を確認</span>
<span class="hljs-meta">$</span><span class="bash"> git <span class="hljs-built_in">log</span> --numstat</span>
<span class="hljs-meta">
#</span><span class="bash"> 直近の3コミットぶんだけを表示</span>
<span class="hljs-meta">$</span><span class="bash"> git <span class="hljs-built_in">log</span> -n 3</span>
<span class="hljs-meta">
#</span><span
  class="bash"
> いい感じに見やすく、コミット履歴ごと＆ファイルごとの追加・削除行数を、直近の5コミットぶんだけ確認</span>
<span class="hljs-meta">$</span><span class="bash"> git <span class="hljs-built_in">log</span> --oneline --graph --decorate --numstat -n 5</span>
</code></pre>
    <h3 id="リモートリポジトリを追加確認する" style>
      <a class="anchor hidden-xs" href="#リモートリポジトリを追加確認する" title="リモートリポジトリを追加確認する">
        <span class="octicon octicon-link"></span>
      </a>リモートリポジトリを追加/確認する
    </h3>
    <pre><code class="command hljs"><span class="hljs-meta">$</span><span
  class="bash"
> git remote add &lt;RepositoryName&gt; &lt;RemoteRepositoryURL&gt;</span>
<span class="hljs-meta">$</span><span class="bash"> git remote -v</span>
<span class="hljs-meta">
#</span><span class="bash"> ハッカソンで使うリモートリポジトリを塚する</span>
<span class="hljs-meta">$</span><span
  class="bash"
> git remote add origin https://github.com/tachibanayu24/vue-mini-hackathon.git</span>
<span class="hljs-meta">$</span><span class="bash"> git remote -v</span>
</code></pre>
    <h2 id="参考" style>
      <a class="anchor hidden-xs" href="#参考" title="参考">
        <span class="octicon octicon-link"></span>
      </a>参考
    </h2>
    <blockquote>
      <p>忘れやすい人のための git diff チートシート
        <br>
        <a
          href="https://qiita.com/shibukk/items/8c9362a5bd399b9c56be"
          target="_blank"
          rel="noopener"
        >https://qiita.com/shibukk/items/8c9362a5bd399b9c56be</a>
      </p>
    </blockquote>
    <blockquote>
      <p>git log よく使うオプションまとめ]
        <br>
        <a
          href="https://qiita.com/take4s5i/items/15d8648405f4e7ea3039"
          target="_blank"
          rel="noopener"
        >https://qiita.com/take4s5i/items/15d8648405f4e7ea3039</a>
      </p>
    </blockquote>
  </div>
  <div class="ui-toc dropup unselectable hidden-print" style="display:none;">
    <div class="pull-right dropdown">
      <a
        id="tocLabel"
        class="ui-toc-label btn btn-default"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        title="Table of content"
      >
        <i class="fa fa-bars"></i>
      </a>
      <ul id="ui-toc" class="ui-toc-dropdown dropdown-menu" aria-labelledby="tocLabel">
        <div class="toc">
          <ul class="nav">
            <li>
              <a href="#VSCode0" title="VSCode">VSCode</a>
              <ul class="nav">
                <li>
                  <a href="#VSCodeを開く" title="VSCodeを開く">VSCodeを開く</a>
                </li>
              </ul>
            </li>
            <li class>
              <a href="#Git" title="Git">Git</a>
              <ul class="nav">
                <li>
                  <a
                    href="#作業ディレクトリから任意のファイルをステージングする"
                    title="作業ディレクトリから任意のファイルをステージングする"
                  >作業ディレクトリから任意のファイルをステージングする</a>
                </li>
                <li>
                  <a href="#ローカルリポジトリにコミットする" title="ローカルリポジトリにコミットする">ローカルリポジトリにコミットする</a>
                </li>
                <li>
                  <a href="#リモートリポジトリにpushする" title="リモートリポジトリにpushする">リモートリポジトリにpushする</a>
                </li>
                <li>
                  <a href="#リモートリポジトリからpullする" title="リモートリポジトリからpullする">リモートリポジトリからpullする</a>
                </li>
                <li class>
                  <a href="#差分を確認する" title="差分を確認する">差分を確認する</a>
                </li>
                <li>
                  <a href="#コミット履歴を確認する" title="コミット履歴を確認する">コミット履歴を確認する</a>
                </li>
                <li>
                  <a href="#リモートリポジトリを追加確認する" title="リモートリポジトリを追加/確認する">リモートリポジトリを追加/確認する</a>
                </li>
              </ul>
            </li>
            <li class>
              <a href="#参考" title="参考">参考</a>
            </li>
          </ul>
        </div>
        <div class="toc-menu">
          <a class="expand-toggle" href="#">Expand all</a>
          <a class="back-to-top" href="#">Back to top</a>
          <a class="go-to-bottom" href="#">Go to bottom</a>
        </div>
      </ul>
    </div>
  </div>
  <div
    id="ui-toc-affix"
    class="ui-affix-toc ui-toc-dropdown unselectable hidden-print"
    data-spy="affix"
    style="top:17px;display:none;"
  >
    <div class="toc">
      <ul class="nav">
        <li>
          <a href="#VSCode0" title="VSCode">VSCode</a>
          <ul class="nav">
            <li>
              <a href="#VSCodeを開く" title="VSCodeを開く">VSCodeを開く</a>
            </li>
          </ul>
        </li>
        <li class>
          <a href="#Git" title="Git">Git</a>
          <ul class="nav">
            <li>
              <a
                href="#作業ディレクトリから任意のファイルをステージングする"
                title="作業ディレクトリから任意のファイルをステージングする"
              >作業ディレクトリから任意のファイルをステージングする</a>
            </li>
            <li>
              <a href="#ローカルリポジトリにコミットする" title="ローカルリポジトリにコミットする">ローカルリポジトリにコミットする</a>
            </li>
            <li>
              <a href="#リモートリポジトリにpushする" title="リモートリポジトリにpushする">リモートリポジトリにpushする</a>
            </li>
            <li>
              <a href="#リモートリポジトリからpullする" title="リモートリポジトリからpullする">リモートリポジトリからpullする</a>
            </li>
            <li class>
              <a href="#差分を確認する" title="差分を確認する">差分を確認する</a>
            </li>
            <li>
              <a href="#コミット履歴を確認する" title="コミット履歴を確認する">コミット履歴を確認する</a>
            </li>
            <li>
              <a href="#リモートリポジトリを追加確認する" title="リモートリポジトリを追加/確認する">リモートリポジトリを追加/確認する</a>
            </li>
          </ul>
        </li>
        <li class>
          <a href="#参考" title="参考">参考</a>
        </li>
      </ul>
    </div>
    <div class="toc-menu">
      <a class="expand-toggle" href="#">Expand all</a>
      <a class="back-to-top" href="#">Back to top</a>
      <a class="go-to-bottom" href="#">Go to bottom</a>
    </div>
  </div>
</body>
</template>

<style scoped>
.hljs {
  display: block;
  background: #fff;
  padding: 0.5em;
  color: #333;
  overflow-x: auto;
}
.hljs-comment,
.hljs-meta {
  color: #969896;
}
.hljs-emphasis,
.hljs-quote,
.hljs-string,
.hljs-strong,
.hljs-template-variable,
.hljs-variable {
  color: #df5000;
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-type {
  color: #a71d5d;
}
.hljs-attribute,
.hljs-bullet,
.hljs-literal,
.hljs-number,
.hljs-symbol {
  color: #0086b3;
}
.hljs-built_in,
.hljs-builtin-name {
  color: #005cc5;
}
.hljs-name,
.hljs-section {
  color: #63a35c;
}
.hljs-tag {
  color: #333;
}
.hljs-attr,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id,
.hljs-selector-pseudo,
.hljs-title {
  color: #795da3;
}
.hljs-addition {
  color: #55a532;
  background-color: #eaffea;
}
.hljs-deletion {
  color: #bd2c00;
  background-color: #ffecec;
}
.hljs-link {
  text-decoration: underline;
}
.markdown-body {
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}
.markdown-body:after,
.markdown-body:before {
  display: table;
  content: "";
}
.markdown-body:after {
  clear: both;
}
.markdown-body > :first-child {
  margin-top: 0 !important;
}
.markdown-body > :last-child {
  margin-bottom: 0 !important;
}
.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}
.markdown-body .absent {
  color: #c00;
}
.markdown-body .anchor {
  float: left;
  padding-right: 4px;
  margin-left: -20px;
  line-height: 1;
}
.markdown-body .anchor:focus {
  outline: none;
}
.markdown-body blockquote,
.markdown-body dl,
.markdown-body ol,
.markdown-body p,
.markdown-body pre,
.markdown-body table,
.markdown-body ul {
  margin-top: 0;
  margin-bottom: 16px;
}
.markdown-body hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e7e7e7;
  border: 0;
}
.markdown-body blockquote {
  font-size: 16px;
  padding: 0 1em;
  color: #777;
  border-left: 0.25em solid #ddd;
}
.markdown-body blockquote > :first-child {
  margin-top: 0;
}
.markdown-body blockquote > :last-child {
  margin-bottom: 0;
}
.markdown-body .loweralpha {
  list-style-type: lower-alpha;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}
.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #000;
  vertical-align: middle;
  visibility: hidden;
}
.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}
.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}
.markdown-body h1 code,
.markdown-body h1 tt,
.markdown-body h2 code,
.markdown-body h2 tt,
.markdown-body h3 code,
.markdown-body h3 tt,
.markdown-body h4 code,
.markdown-body h4 tt,
.markdown-body h5 code,
.markdown-body h5 tt,
.markdown-body h6 code,
.markdown-body h6 tt {
  font-size: inherit;
}
.markdown-body h1 {
  font-size: 2em;
}
.markdown-body h1,
.markdown-body h2 {
  padding-bottom: 0.3em;
  border-bottom: 1px solid #eee;
}
.markdown-body h2 {
  font-size: 1.5em;
}
.markdown-body h3 {
  font-size: 1.25em;
}
.markdown-body h4 {
  font-size: 1em;
}
.markdown-body h5 {
  font-size: 0.875em;
}
.markdown-body h6 {
  font-size: 0.85em;
  color: #777;
}
.markdown-body ol,
.markdown-body ul {
  padding-left: 2em;
}
.markdown-body ol.no-list,
.markdown-body ul.no-list {
  padding: 0;
  list-style-type: none;
}
.markdown-body ol ol,
.markdown-body ol ul,
.markdown-body ul ol,
.markdown-body ul ul {
  margin-top: 0;
  margin-bottom: 0;
}
.markdown-body li > p {
  margin-top: 16px;
}
.markdown-body li + li {
  margin-top: 0.25em;
}
.markdown-body dl {
  padding: 0;
}
.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 700;
}
.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}
.markdown-body table {
  display: block;
  width: 100%;
  overflow: auto;
  word-break: normal;
  word-break: keep-all;
}
.markdown-body table th {
  font-weight: 700;
}
.markdown-body table td,
.markdown-body table th {
  padding: 6px 13px;
  border: 1px solid #ddd;
}
.markdown-body table tr {
  background-color: #fff;
  border-top: 1px solid #ccc;
}
.markdown-body table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
.markdown-body img {
  max-width: 100%;
  box-sizing: content-box;
  background-color: #fff;
}
.markdown-body img[align="right"] {
  padding-left: 20px;
}
.markdown-body img[align="left"] {
  padding-right: 20px;
}
.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}
.markdown-body span.frame {
  display: block;
  overflow: hidden;
}
.markdown-body span.frame > span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #ddd;
}
.markdown-body span.frame span img {
  display: block;
  float: left;
}
.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #333;
}
.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}
.markdown-body span.align-center > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}
.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}
.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}
.markdown-body span.align-right > span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}
.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}
.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}
.markdown-body span.float-left span {
  margin: 13px 0 0;
}
.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}
.markdown-body span.float-right > span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}
.markdown-body code,
.markdown-body tt {
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 3px;
}
.markdown-body code:after,
.markdown-body code:before,
.markdown-body tt:after,
.markdown-body tt:before {
  letter-spacing: -0.2em;
  content: "\00a0";
}
.markdown-body code br,
.markdown-body tt br {
  display: none;
}
.markdown-body del code {
  text-decoration: inherit;
}
.markdown-body pre {
  word-wrap: normal;
}
.markdown-body pre > code {
  padding: 0;
  margin: 0;
  font-size: 100%;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}
.markdown-body .highlight {
  margin-bottom: 16px;
}
.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}
.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f7f7f7;
  border-radius: 3px;
}
.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}
.markdown-body pre code:after,
.markdown-body pre code:before,
.markdown-body pre tt:after,
.markdown-body pre tt:before {
  content: normal;
}
.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}
.markdown-body .csv-data .blob-line-num {
  padding: 10px 8px 9px;
  text-align: right;
  background: #fff;
  border: 0;
}
.markdown-body .csv-data tr {
  border-top: 0;
}
.markdown-body .csv-data th {
  font-weight: 700;
  background: #f8f8f8;
  border-top: 0;
}
.markdown-body kbd {
  display: inline-block;
  padding: 3px 5px;
  font-size: 11px;
  line-height: 10px;
  color: #555;
  vertical-align: middle;
  background-color: #fcfcfc;
  border: 1px solid #ccc;
  border-bottom-color: #bbb;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #bbb;
}
.news .alert .markdown-body blockquote {
  padding: 0 0 0 40px;
  border: 0 none;
}
.activity-tab .news .alert .commits,
.activity-tab .news .markdown-body blockquote {
  padding-left: 0;
}
.task-list-item {
  list-style-type: none;
}
.task-list-item label {
  font-weight: 400;
}
.task-list-item.enabled label {
  cursor: pointer;
}
.task-list-item + .task-list-item {
  margin-top: 3px;
}
.task-list-item-checkbox {
  float: left;
  margin: 0.31em 0 0.2em -1.3em !important;
  vertical-align: middle;
  cursor: default !important;
}
.markdown-body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue,
    Helvetica, Roboto, Arial, sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 758px;
  overflow: visible !important;
}
.markdown-body .emoji {
  vertical-align: top;
}
.markdown-body pre {
  border: inherit !important;
}
.markdown-body code {
  color: inherit !important;
}
.markdown-body pre code .wrapper {
  display: -moz-inline-flex;
  display: -ms-inline-flex;
  display: -o-inline-flex;
  display: inline-flex;
}
.markdown-body pre code .gutter {
  float: left;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}
.markdown-body pre code .gutter.linenumber {
  text-align: right;
  position: relative;
  display: inline-block;
  cursor: default;
  z-index: 4;
  padding: 0 8px 0 0;
  min-width: 20px;
  box-sizing: content-box;
  color: #afafaf !important;
  border-right: 3px solid #6ce26c !important;
}
.markdown-body pre code .gutter.linenumber > span:before {
  content: attr(data-linenumber);
}
.markdown-body pre code .code {
  float: left;
  margin: 0 0 0 16px;
}
.markdown-body .gist .line-numbers {
  border-left: none;
  border-top: none;
  border-bottom: none;
}
.markdown-body .gist .line-data {
  border: none;
}
.markdown-body .gist table {
  border-spacing: 0;
  border-collapse: inherit !important;
}
.markdown-body code[data-gist-id] {
  background: none;
  padding: 0;
}
.markdown-body code[data-gist-id]:after,
.markdown-body code[data-gist-id]:before {
  content: "";
}
.markdown-body code[data-gist-id] .blob-num {
  border: unset;
}
.markdown-body code[data-gist-id] table {
  overflow: unset;
  margin-bottom: unset;
}
.markdown-body code[data-gist-id] table tr {
  background: unset;
}
.markdown-body[dir="rtl"] pre {
  direction: ltr;
}
.markdown-body[dir="rtl"] code {
  direction: ltr;
  unicode-bidi: embed;
}
.markdown-body .alert > p {
  margin-bottom: 0;
}
.markdown-body pre.abc,
.markdown-body pre.flow-chart,
.markdown-body pre.graphviz,
.markdown-body pre.mermaid,
.markdown-body pre.sequence-diagram {
  text-align: center;
  background-color: inherit;
  border-radius: 0;
  white-space: inherit;
}
.markdown-body pre.abc > code,
.markdown-body pre.flow-chart > code,
.markdown-body pre.graphviz > code,
.markdown-body pre.mermaid > code,
.markdown-body pre.sequence-diagram > code {
  text-align: left;
}
.markdown-body pre.abc > svg,
.markdown-body pre.flow-chart > svg,
.markdown-body pre.graphviz > svg,
.markdown-body pre.mermaid > svg,
.markdown-body pre.sequence-diagram > svg {
  max-width: 100%;
  height: 100%;
}
.markdown-body pre > code.wrap {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
.markdown-body .alert > p,
.markdown-body .alert > ul {
  margin-bottom: 0;
}
.markdown-body summary {
  display: list-item;
}
.markdown-body summary:focus {
  outline: none;
}
.markdown-body details summary {
  cursor: pointer;
}
.markdown-body details:not([open]) > :not(summary) {
  display: none;
}
.markdown-body figure {
  margin: 1em 40px;
}
.markdown-body .mark,
.markdown-body mark {
  background-color: #fff1a7;
}
.vimeo,
.youtube {
  cursor: pointer;
  display: table;
  text-align: center;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #000;
  overflow: hidden;
}
.vimeo,
.youtube {
  position: relative;
  width: 100%;
}
.youtube {
  padding-bottom: 56.25%;
}
.vimeo img {
  width: 100%;
  object-fit: contain;
  z-index: 0;
}
.youtube img {
  object-fit: cover;
  z-index: 0;
}
.vimeo iframe,
.youtube iframe,
.youtube img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.vimeo iframe,
.youtube iframe {
  vertical-align: middle;
  z-index: 1;
}
.vimeo .icon,
.youtube .icon {
  position: absolute;
  height: auto;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  opacity: 0.3;
  transition: opacity 0.2s;
  z-index: 0;
}
.vimeo:hover .icon,
.youtube:hover .icon {
  opacity: 0.6;
  transition: opacity 0.2s;
}
.slideshare .inner,
.speakerdeck .inner {
  position: relative;
  width: 100%;
}
.slideshare .inner iframe,
.speakerdeck .inner iframe {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.MJX_Assistive_MathML {
  display: none;
}
.ui-infobar {
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 25px auto -25px;
  padding: 0 15px;
  color: #777;
}
.toc .invisable-node {
  list-style-type: none;
}
.ui-toc {
  position: fixed;
  bottom: 20px;
  z-index: 998;
}
.ui-toc-label {
  opacity: 0.3;
  background-color: #ccc;
  border: none;
  transition: opacity 0.2s;
}
.ui-toc .open .ui-toc-label {
  opacity: 1;
  color: #fff;
  transition: opacity 0.2s;
}
.ui-toc-label:focus {
  opacity: 0.3;
  background-color: #ccc;
  color: #000;
}
.ui-toc-label:hover {
  opacity: 1;
  background-color: #ccc;
  transition: opacity 0.2s;
}
.ui-toc-dropdown {
  margin-top: 23px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 45vw;
  width: 25vw;
  max-height: 70vh;
  overflow: auto;
  text-align: inherit;
}
.ui-toc-dropdown > .toc {
  max-height: calc(70vh - 100px);
  overflow: auto;
}
.ui-toc-dropdown[dir="rtl"] .nav {
  padding-right: 0;
  letter-spacing: 0.0029em;
}
.ui-toc-dropdown a {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
}
.ui-toc-dropdown .nav > li > a {
  display: block;
  padding: 4px 20px;
  font-size: 13px;
  font-weight: 500;
  color: #767676;
}
.ui-toc-dropdown .nav > li:first-child:last-child > ul,
.ui-toc-dropdown .toc.expand ul {
  display: block;
}
.ui-toc-dropdown .nav > li > a:focus,
.ui-toc-dropdown .nav > li > a:hover {
  padding-left: 19px;
  color: #000;
  text-decoration: none;
  background-color: transparent;
  border-left: 1px solid #000;
}
.ui-toc-dropdown[dir="rtl"] .nav > li > a:focus,
.ui-toc-dropdown[dir="rtl"] .nav > li > a:hover {
  padding-right: 19px;
  border-left: none;
  border-right: 1px solid #000;
}
.ui-toc-dropdown .nav > .active:focus > a,
.ui-toc-dropdown .nav > .active:hover > a,
.ui-toc-dropdown .nav > .active > a {
  padding-left: 18px;
  font-weight: 700;
  color: #000;
  background-color: transparent;
  border-left: 2px solid #000;
}
.ui-toc-dropdown[dir="rtl"] .nav > .active:focus > a,
.ui-toc-dropdown[dir="rtl"] .nav > .active:hover > a,
.ui-toc-dropdown[dir="rtl"] .nav > .active > a {
  padding-right: 18px;
  border-left: none;
  border-right: 2px solid #000;
}
.ui-toc-dropdown .nav .nav {
  display: none;
  padding-bottom: 10px;
}
.ui-toc-dropdown .nav > .active > ul {
  display: block;
}
.ui-toc-dropdown .nav .nav > li > a {
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 30px;
  font-size: 12px;
  font-weight: 400;
}
.ui-toc-dropdown[dir="rtl"] .nav .nav > li > a {
  padding-right: 30px;
}
.ui-toc-dropdown .nav .nav > li > ul > li > a {
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 40px;
  font-size: 12px;
  font-weight: 400;
}
.ui-toc-dropdown[dir="rtl"] .nav .nav > li > ul > li > a {
  padding-right: 40px;
}
.ui-toc-dropdown .nav .nav > li > a:focus,
.ui-toc-dropdown .nav .nav > li > a:hover {
  padding-left: 29px;
}
.ui-toc-dropdown[dir="rtl"] .nav .nav > li > a:focus,
.ui-toc-dropdown[dir="rtl"] .nav .nav > li > a:hover {
  padding-right: 29px;
}
.ui-toc-dropdown .nav .nav > li > ul > li > a:focus,
.ui-toc-dropdown .nav .nav > li > ul > li > a:hover {
  padding-left: 39px;
}
.ui-toc-dropdown[dir="rtl"] .nav .nav > li > ul > li > a:focus,
.ui-toc-dropdown[dir="rtl"] .nav .nav > li > ul > li > a:hover {
  padding-right: 39px;
}
.ui-toc-dropdown .nav .nav > .active:focus > a,
.ui-toc-dropdown .nav .nav > .active:hover > a,
.ui-toc-dropdown .nav .nav > .active > a {
  padding-left: 28px;
  font-weight: 500;
}
.ui-toc-dropdown[dir="rtl"] .nav .nav > .active:focus > a,
.ui-toc-dropdown[dir="rtl"] .nav .nav > .active:hover > a,
.ui-toc-dropdown[dir="rtl"] .nav .nav > .active > a {
  padding-right: 28px;
}
.ui-toc-dropdown .nav .nav > .active > .nav > .active:focus > a,
.ui-toc-dropdown .nav .nav > .active > .nav > .active:hover > a,
.ui-toc-dropdown .nav .nav > .active > .nav > .active > a {
  padding-left: 38px;
  font-weight: 500;
}
.ui-toc-dropdown[dir="rtl"] .nav .nav > .active > .nav > .active:focus > a,
.ui-toc-dropdown[dir="rtl"] .nav .nav > .active > .nav > .active:hover > a,
.ui-toc-dropdown[dir="rtl"] .nav .nav > .active > .nav > .active > a {
  padding-right: 38px;
}
.markdown-body[lang^="ja"] {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue,
    Helvetica, Roboto, Arial, Hiragino Kaku Gothic Pro, ヒラギノ角ゴ Pro W3,
    Osaka, Meiryo, メイリオ, MS Gothic, ＭＳ\ゴシック, sans-serif;
}
.ui-toc-dropdown[lang^="ja"] {
  font-family: Source Sans Pro, Helvetica, Arial, Meiryo UI, MS PGothic,
    ＭＳ\Ｐゴシック, sans-serif;
}
.markdown-body[lang="zh-tw"] {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue,
    Helvetica, Roboto, Arial, PingFang TC, Microsoft JhengHei, 微軟正黑,
    sans-serif;
}
.ui-toc-dropdown[lang="zh-tw"] {
  font-family: Source Sans Pro, Helvetica, Arial, Microsoft JhengHei UI,
    微軟正黑UI, sans-serif;
}
.markdown-body[lang="zh-cn"] {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue,
    Helvetica, Roboto, Arial, PingFang SC, Microsoft YaHei, 微软雅黑, sans-serif;
}
.ui-toc-dropdown[lang="zh-cn"] {
  font-family: Source Sans Pro, Helvetica, Arial, Microsoft YaHei UI, 微软雅黑UI,
    sans-serif;
}
.ui-affix-toc {
  position: fixed;
  top: 0;
  max-width: 15vw;
  max-height: 70vh;
  overflow: auto;
}
.back-to-top,
.expand-toggle,
.go-to-bottom {
  display: block;
  padding: 4px 10px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 500;
  color: #999;
}
.back-to-top:focus,
.back-to-top:hover,
.expand-toggle:focus,
.expand-toggle:hover,
.go-to-bottom:focus,
.go-to-bottom:hover {
  color: #563d7c;
  text-decoration: none;
}
.back-to-top,
.go-to-bottom {
  margin-top: 0;
}
.ui-user-icon {
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 3px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 5px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.ui-user-icon.small {
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 0.2em;
}
.ui-infobar > small > span {
  line-height: 22px;
}
.ui-infobar > small .dropdown {
  display: inline-block;
}
.ui-infobar > small .dropdown a:focus,
.ui-infobar > small .dropdown a:hover {
  text-decoration: none;
}
.unselectable {
  -webkit-user-select: none;
  -o-user-select: none;
  user-select: none;
}
@media print {
  blockquote,
  div,
  img,
  pre,
  table {
    page-break-inside: avoid !important;
  }
  a[href]:after {
    font-size: 12px !important;
  }
}
.markdown-body.slides {
  position: relative;
  z-index: 1;
  color: #222;
}
.markdown-body.slides:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: currentColor;
  box-shadow: 0 0 0 50vw;
}
.markdown-body.slides section[data-markdown] {
  position: relative;
  margin-bottom: 1.5em;
  background-color: #fff;
  text-align: center;
}
.markdown-body.slides section[data-markdown] code {
  text-align: left;
}
.markdown-body.slides section[data-markdown]:before {
  content: "";
  display: block;
  padding-bottom: 56.23%;
}
.markdown-body.slides section[data-markdown] > div:first-child {
  position: absolute;
  top: 50%;
  left: 1em;
  right: 1em;
  transform: translateY(-50%);
  max-height: 100%;
  overflow: hidden;
}
.markdown-body.slides section[data-markdown] > ul {
  display: inline-block;
}
.markdown-body.slides > section > section + section:after {
  content: "";
  position: absolute;
  top: -1.5em;
  right: 1em;
  height: 1.5em;
  border: 3px solid #777;
}
body {
  text-align: left;
  font-smoothing: subpixel-antialiased !important;
  -webkit-font-smoothing: subpixel-antialiased !important;
  -moz-osx-font-smoothing: auto !important;
  text-shadow: 0 0 1em transparent, 1px 1px 1.2px rgba(0, 0, 0, 0.004);
  -webkit-overflow-scrolling: touch;
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  letter-spacing: 0.025em;
}
.focus,
:focus {
  outline: none !important;
}
::-moz-focus-inner {
  border: 0 !important;
}
body.modal-open {
  overflow-y: auto;
  padding-right: 0 !important;
}
</style>
