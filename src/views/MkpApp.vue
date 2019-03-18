<template>
  <div class="mkp-app">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">kokoni logo</div>
      </el-col>
      <el-col :span="12">
        <div class="logo">
          <div id="container">Make your
            <div id="flip">
              <div>
                <div>Lunch🍔</div>
              </div>
              <div>
                <div>Lunch🍣</div>
              </div>
              <div>
                <div>Lunch🍜</div>
              </div>
            </div>AweSoMe!
          </div>
        </div>
      </el-col>
    </el-row>

    <Otenki/>
    <SelectCondition/>
    <Roulette/>
    <StoreList/>
  </div>
</template>

<script>
import Otenki from "../components/Otenki";
import SelectCondition from "../components/SelectCondition";
import Roulette from "../components/Roulette.vue";
import StoreList from "../components/StoreList.vue";

export default {
  name: "OhiRoulette",
  components: {
    Otenki,
    SelectCondition,
    Roulette,
    StoreList
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

body {
  margin: 0px;
  font-family: "Roboto";
  text-align: center;
}

#container {
  color: #999;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  /* position: fixed; */
  width: 100%;
  bottom: 45%;
  display: block;
  text-align: left;
}

#flip {
  height: 50px;
  overflow: hidden;
}

#flip > div > div {
  color: #fff;
  padding: 4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background: #42c58a;
}
#flip div:first-child div {
  background: #4ec7f3;
}
#flip div:last-child div {
  background: #dc143c;
}

@keyframes show {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

p {
  position: fixed;
  width: 100%;
  bottom: 30px;
  font-size: 12px;
  color: #999;
  margin-top: 200px;
}
</style>