<template>
  <footer class="footer">
    <p>Copyright MukiMukiPerch 2019~</p>
    <el-row>
      <el-col :span="16" class="footer-left">Made By</el-col>
      <el-col :span="6" class="footer-right">
        <p>Akira Tsuru</p>
        <p>Nao Onoda</p>
        <p>Shohei Umehara</p>
        <p>Shinichiro Higuchi</p>
        <p>Yuto Tachibana</p>
      </el-col>
    </el-row>
  </footer>
</template>

<style scoped>
@import url(//fonts.googleapis.com/css?family=Racing+Sans+One);

.footer-left {
  text-align: right;
  margin: 10px;
}

.footer-right {
  text-align: left;
  margin: 10px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.footer {
  font-family: "Racing Sans One", sans-serif;
  font-size: 18px;
  height: 100%;
  width: 100%;
  background: #ff9e9e;
  color: #fff;
  line-height: 1.6;
  padding: 1em;
  min-height: 3.2em;
  text-align: center;
}
</style>
