<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#add6ff"
      text-color="#223a70"
    >
      <el-menu-item>
        <img class="header-icon" alt="logo" src="../assets/mkp.png">
        <span class="header-text">mini Hackathon</span>
      </el-menu-item>
      <el-menu-item index="top" :route="{ name: 'top' }">
        <a href="/">
          <strong>Top</strong>
        </a>
      </el-menu-item>
      <el-menu-item index="git" :route="{ name: 'git' }">
        <a href="/git">
          <strong>Gitとは</strong>
        </a>
      </el-menu-item>
      <el-menu-item index="cheat-sheet" :route="{ name: 'cheat-sheet' }">
        <a href="/cheat-sheet">
          <strong>CheatSheet</strong>
        </a>
      </el-menu-item>
      <el-menu-item index="mkp-app" :route="{ name: 'mkp-app' }">
        <a href="/mkp-app">
          <strong>MKP APP</strong>
        </a>
      </el-menu-item>
      <div class="box">
        <h1>Check it
          <br>out!
        </h1>
      </div>
    </el-menu>
  </div>
</template>

<style scoped>
.header-icon {
  height: 24px;
  margin-right: 3px;
}

.header-text {
  font-weight: 900;
  color: #4a4a4a;
}

.box {
  position: absolute;
  top: -155px;
  left: 580px;
  background: orange;
  width: 80px;
  height: 80px;
  margin: 150px auto;
  transition: 0.2s linear;
  -webkit-clip-path: polygon(
    12% 12%,
    70% 10%,
    68% 45%,
    44% 44%,
    30% 44%,
    7% 45%
  );
}
.box:hover {
  background: black;
  color: orange;
}
h1 {
  position: absolute;
  display: inline-block;
  top: -4px;
  left: 15px;
  font-size: 8px;
  font-weight: 900;
  transition: all 0.2s linear;
}
</style>
