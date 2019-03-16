<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#add6ff"
      text-color="#223a70"
    >
      <el-menu-item>
        <img class="header-icon" alt="logo" src="../assets/mkp.png" />
        <span class="header-text">mini Hackathon</span>
      </el-menu-item>
      <el-menu-item index="about" :route="{ name: 'about' }">
        <a href="/about">
          <strong>About</strong>
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
</style>
