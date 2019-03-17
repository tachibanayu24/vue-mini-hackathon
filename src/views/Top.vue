<template>
<!-- eslint-disable -->
<body>
  <div id="doc" class="markdown-body container-fluid comment-enabled" style="position: relative;">
    <h1 id="Gitで管理するVueアプリケーション開発ハッカソン">
      <a
        class="anchor hidden-xs"
        href="#Gitで管理するVueアプリケーション開発ハッカソン"
        title="Gitで管理するVueアプリケーション開発ハッカソン"
      >
        <span class="octicon octicon-link"></span>
      </a>Gitで管理するVueアプリケーション開発ハッカソン
    </h1>
    <h2 id="はじめに">
      <a class="anchor hidden-xs" href="#はじめに" title="はじめに">
        <span class="octicon octicon-link"></span>
      </a>はじめに
    </h2>
    <p>Gitでコード管理し、VueでWeb開発を行うハッカソンのページです。
      <br>ページヘッダの
      <code>MKP APP</code>タブでSPA(シングルページアプリケーション)を開発します。
      <br>
      <code>Gitとは</code>タブは、おそらく初めて利用する人が多いGitの概要を書いています。
      <br>
      <code>CheatSheet</code>タブは、コマンドなどを忘れたときのために。
    </p>
    <p>アンケートで希望の多かった</p>
    <ul>
      <li>Vue</li>
      <li>JavaScript</li>
      <li>Git</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
    <p>あたりの理解度を深めることができます。</p>
    <p>このアプリケーションは、<a href="https://mkp-vue-app.firebaseapp.com" target="_blank">https://mkp-vue-app.firebaseapp.com</a>で公開しています。</p>
    <p>ソースコードは、<a href="https://github.com/tachibanayu24/vue-mini-hackathon" target="_blank">https://github.com/tachibanayu24/vue-mini-hackathon</a>で公開しています。</p>
    <h2 id="ハッカソンの目標">
      <a class="anchor hidden-xs" href="#ハッカソンの目標" title="ハッカソンの目標">
        <span class="octicon octicon-link"></span>
      </a>ハッカソンの目標
    </h2>
    <ul>
      <li>
        <p>必達目標</p>
        <ul>
          <li>何を作るのか決める</li>
          <li>簡単な設計を実施する</li>
          <li>完成させる</li>
          <li>振り返りをする</li>
        </ul>
      </li>
      <li>
        <p>努力目標</p>
        <ul>
          <li>インターネットに公開する(やっていいなら)</li>
        </ul>
      </li>
      <li>
        <p>やらないこと</p>
        <ul>
          <li>Unitテスト</li>
          <li>バックエンドの開発</li>
          <li>DBの利用</li>
          <li>E2Eテスト(End-to-End Test)</li>
          <li>詳細な設計</li>
        </ul>
      </li>
    </ul>
    <h2 id="何が得られるのか？">
      <a class="anchor hidden-xs" href="#何が得られるのか？" title="何が得られるのか？">
        <span class="octicon octicon-link"></span>
      </a>何が得られるのか？
    </h2>
    <p>このハッカソンで以下の経験ができます。</p>
    <ul>
      <li>GitをCLI(コマンドラインインターフェイス)で利用してチーム開発をする経験</li>
      <li>イチから自分でアプリケーションを開発する経験</li>
      <li>詳細な設計書なしで、考えながらVue, JSのコードを書く経験</li>
      <li>設計書通りではなく、自分でより良いUIを考えながらHTML, CSSのコーディングをする経験</li>
    </ul>
    <h2 id="タイムスケジュール">
      <a class="anchor hidden-xs" href="#タイムスケジュール" title="タイムスケジュール">
        <span class="octicon octicon-link"></span>
      </a>タイムスケジュール
    </h2>
    <table>
      <thead>
        <tr>
          <th>開始時間</th>
          <th>終了時間</th>
          <th>やること</th>
          <th>詳細</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>11:00</td>
          <td>11:10</td>
          <td>オープニング</td>
          <td>何をやるのかの説明</td>
        </tr>
        <tr>
          <td>11:10</td>
          <td>11:25</td>
          <td>Gitのレクチャ</td>
          <td>Gitを超シンプルに理解する</td>
        </tr>
        <tr>
          <td>11:25</td>
          <td>11:45</td>
          <td>アイデアソン</td>
          <td>何を作るのか考える</td>
        </tr>
        <tr>
          <td>11:45</td>
          <td>12:00</td>
          <td>設計(1)</td>
          <td>コンポーネントの分け方とか</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>13:00</td>
          <td>休憩</td>
          <td></td>
        </tr>
        <tr>
          <td>13:00</td>
          <td>13:15</td>
          <td>設計(2)</td>
          <td>レイアウト、分担</td>
        </tr>
        <tr>
          <td>13:15</td>
          <td>13:30</td>
          <td>環境構築</td>
          <td>各自のローカル環境で動くようにする</td>
        </tr>
        <tr>
          <td>13:30</td>
          <td>16:00</td>
          <td>開発</td>
          <td>適宜休憩を取りながら</td>
        </tr>
        <tr>
          <td>16:00</td>
          <td>16:10</td>
          <td>クロージング</td>
          <td>振り返りとか</td>
        </tr>
      </tbody>
    </table>
    <h2 id="開発環境">
      <a class="anchor hidden-xs" href="#開発環境" title="開発環境">
        <span class="octicon octicon-link"></span>
      </a>開発環境
    </h2>
    <p>以下のバージョン・ツールを想定しています。</p>
    <h3 id="バージョン情報">
      <a class="anchor hidden-xs" href="#バージョン情報" title="バージョン情報">
        <span class="octicon octicon-link"></span>
      </a>バージョン情報
    </h3>
    <pre><code class="command hljs"><span class="hljs-selector-tag">Vue</span>: 3<span class="hljs-selector-class">.3</span><span class="hljs-selector-class">.0</span>
<span class="hljs-selector-tag">node</span>: <span class="hljs-selector-tag">v11</span><span class="hljs-selector-class">.2</span><span class="hljs-selector-class">.0</span>
<span class="hljs-selector-tag">npm</span>: 6<span class="hljs-selector-class">.4</span><span class="hljs-selector-class">.1</span>
<span class="hljs-selector-tag">git</span>: 2<span class="hljs-selector-class">.19</span><span class="hljs-selector-class">.1</span>
<span class="hljs-selector-tag">ElementUI</span>: 2<span class="hljs-selector-class">.6</span><span class="hljs-selector-class">.1</span>
<span class="hljs-selector-tag">Google</span> <span class="hljs-selector-tag">Chrome</span>: 72<span class="hljs-selector-class">.0</span><span class="hljs-selector-class">.3626</span><span class="hljs-selector-class">.121</span> (<span class="hljs-selector-tag">Official</span> <span class="hljs-selector-tag">Build</span>) (64<span class="hljs-selector-tag">-bit</span>)
</code></pre>
    <h2 id="利用するツール">
      <a class="anchor hidden-xs" href="#利用するツール" title="利用するツール">
        <span class="octicon octicon-link"></span>
      </a>利用するツール
    </h2>
    <ul>
      <li>リモートリポジトリ
        <ul>
          <li>GitHub</li>
        </ul>
      </li>
      <li>エディタ
        <ul>
          <li>VSCode</li>
        </ul>
      </li>
      <li>コンソールエミュレータ
        <ul>
          <li>cmder</li>
        </ul>
      </li>
    </ul>
    <h2 id="構成">
      <a class="anchor hidden-xs" href="#構成" title="構成">
        <span class="octicon octicon-link"></span>
      </a>構成
    </h2>
    <h3 id="ディレクトリ構造">
      <a class="anchor hidden-xs" href="#ディレクトリ構造" title="ディレクトリ構造">
        <span class="octicon octicon-link"></span>
      </a>ディレクトリ構造
    </h3>
    <pre><code>.
├── README.md
├── babel.config.js
├── package.json
├── postcss.config.js
├── public
│&nbsp;&nbsp; ├── favicon.ico
│&nbsp;&nbsp; └── index.html
├── src
│&nbsp;&nbsp; ├── App.vue
│&nbsp;&nbsp; ├── assets  # 画像を使う場合はここに入れる
│&nbsp;&nbsp; │&nbsp;&nbsp; └── mkp.png
│&nbsp;&nbsp; ├── components  # ここにファイルを追加していく
│&nbsp;&nbsp; │&nbsp;&nbsp; └── Header.vue
│&nbsp;&nbsp; ├── main.js
│&nbsp;&nbsp; ├── router.js
│&nbsp;&nbsp; └── views
│&nbsp;&nbsp;     ├── About.vue
│&nbsp;&nbsp;     ├── CheatSheet.vue
│&nbsp;&nbsp;     └── MkpApp.vue  # ここでコンポーネントを読み込む
└── yarn.lock

</code></pre>
    <h3 id="静的解析">
      <a class="anchor hidden-xs" href="#静的解析" title="静的解析">
        <span class="octicon octicon-link"></span>
      </a>静的解析
    </h3>
    <p>ESLint + Prettier
      <br>明らかなバグを発見したり、コードスタイルの統一化をしてくれます。
      <br>スタイルが違うとコンパイル時に怒られます。
      <br>必須ではないですが、できれば怒られたら修正しましょう。
    </p>
    <h2 id="参考">
      <a class="anchor hidden-xs" href="#参考" title="参考">
        <span class="octicon octicon-link"></span>
      </a>参考
    </h2>
    <blockquote>
      <p>Vue CLI 3 - Creating our Project - Real World Vue.js | Vue Mastery
        <br>
        <a
          href="https://www.vuemastery.com/courses/real-world-vue-js/vue-cli/"
          target="_blank"
          rel="noopener"
        >https://www.vuemastery.com/courses/real-world-vue-js/vue-cli/</a>
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
              <a href="#20190318_Vueハンズオン" title="20190318_Vueハンズオン">20190318_Vueハンズオン</a>
            </li>
            <li class>
              <a
                href="#Gitで管理するVueアプリケーション開発ハッカソン"
                title="Gitで管理するVueアプリケーション開発ハッカソン"
              >Gitで管理するVueアプリケーション開発ハッカソン</a>
              <ul class="nav">
                <li>
                  <a href="#はじめに" title="はじめに">はじめに</a>
                </li>
                <li>
                  <a href="#ハッカソンの目標" title="ハッカソンの目標">ハッカソンの目標</a>
                </li>
                <li>
                  <a href="#何が得られるのか？" title="何が得られるのか？">何が得られるのか？</a>
                </li>
                <li>
                  <a href="#タイムスケジュール" title="タイムスケジュール">タイムスケジュール</a>
                </li>
                <li>
                  <a href="#開発環境" title="開発環境">開発環境</a>
                  <ul class="nav">
                    <li>
                      <a href="#バージョン情報" title="バージョン情報">バージョン情報</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#利用するツール" title="利用するツール">利用するツール</a>
                </li>
                <li class>
                  <a href="#構成" title="構成">構成</a>
                  <ul class="nav">
                    <li class>
                      <a href="#ディレクトリ構造" title="ディレクトリ構造">ディレクトリ構造</a>
                    </li>
                    <li>
                      <a href="#静的解析" title="静的解析">静的解析</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#参考" title="参考">参考</a>
                </li>
              </ul>
            </li>
          </ul>
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
          <a href="#20190318_Vueハンズオン" title="20190318_Vueハンズオン">20190318_Vueハンズオン</a>
        </li>
        <li class>
          <a
            href="#Gitで管理するVueアプリケーション開発ハッカソン"
            title="Gitで管理するVueアプリケーション開発ハッカソン"
          >Gitで管理するVueアプリケーション開発ハッカソン</a>
          <ul class="nav">
            <li>
              <a href="#はじめに" title="はじめに">はじめに</a>
            </li>
            <li>
              <a href="#ハッカソンの目標" title="ハッカソンの目標">ハッカソンの目標</a>
            </li>
            <li>
              <a href="#何が得られるのか？" title="何が得られるのか？">何が得られるのか？</a>
            </li>
            <li>
              <a href="#タイムスケジュール" title="タイムスケジュール">タイムスケジュール</a>
            </li>
            <li>
              <a href="#開発環境" title="開発環境">開発環境</a>
              <ul class="nav">
                <li>
                  <a href="#バージョン情報" title="バージョン情報">バージョン情報</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#利用するツール" title="利用するツール">利用するツール</a>
            </li>
            <li class>
              <a href="#構成" title="構成">構成</a>
              <ul class="nav">
                <li class>
                  <a href="#ディレクトリ構造" title="ディレクトリ構造">ディレクトリ構造</a>
                </li>
                <li>
                  <a href="#静的解析" title="静的解析">静的解析</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#参考" title="参考">参考</a>
            </li>
          </ul>
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
body {
  text-align: left;
}

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
