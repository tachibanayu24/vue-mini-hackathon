<template>
<footer class="footer">
  <p>Copyright むきむきPerch 2019~</p>
  <el-row>
    <el-col :span="16" class="footer-left">Made By</el-col>
    <el-col :span="6" class="footer-right">
      <p>Shohei Umehara</p>
      <p>Nao Onoda</p>
      <p>Yuto Tachibana</p>
      <p>Tsuru Akira</p>
      <p>Shinichiro Higuchi</p>
    </el-col>
  </el-row>
</footer>
</template>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Racing+Sans+One);
@import url(//fonts.googleapis.com/css?family=Roboto:400,300italic);

.footer-left {
  text-align: right;
  margin: 10px;
}

.footer-right {
  text-align: left;
  margin: 10px;
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  height: 100%;
  width: 100%;
}

h1 {
  font-family: "Racing Sans One", cursive;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 650px) {
  h1 {
    font-size: 2.25em;
  }
}

.header,
.footer {
  background: #ff9e9e;
  color: #fff;
  line-height: 1.6;
  padding: 1em;
  min-height: 3.2em;
  text-align: center;
}

.footer {
  min-height: 3.28em;
}
.footer p {
  font-size: .8em;
}
.footer a {
  color: #fff;
  text-decoration: none;
}

.main {
  background: #ecf0f1;
  min-height: calc(100vh - 6.48em);
  position: relative;
  text-align: center;
  width: 100%;
}
@media (min-width: 650px) {
  .main {
    min-height: calc(100vh - 7.98em);
  }
}
.main-wrap {
  left: 50%;
  position: absolute;
  text-shadow: 1px 1px 1px #fff;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 100%;
}
.main-links {
  color: #dae2e4;
  font-family: "Racing Sans One", cursive;
  font-size: 1.4em;
  padding-bottom: 0.15em;
  text-decoration: none;
  transition: all 1s ease;
}
.main-links:nth-child(even) {
  position: relative;
  margin-left: 0.375em;
}
.main-links:hover {
  color: #333;
}
.main span {
  color: #dae2e4;
  display: inline-block;
  font-size: 1.4em;
  margin-left: 0.375em;
}

.main-links {
  position: relative;
}
.main-links:after, .main-links:before {
  bottom: 0;
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  position: absolute;
  background: #dae2e4;
  transition: all 0.75s ease-in-out;
}
.main-links:before {
  bottom: auto;
  left: 0;
  right: auto;
  top: 0;
}
.main-links:hover:after, .main-links:hover:before {
  background: #333;
  opacity: 1;
  width: 0%;
}

.main-wrap h1 {
  display: none;
  width: 100%;
}

.not-supported .main-wrap h1 {
  display: block;
}

</style>
