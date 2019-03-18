<template>
  <!-- eslint-disable -->
  <div class="mkp-app">
    <el-row>
      <el-col :span="12">
        <div class="logo-img">
          <img src="../assets/logo.png" alt>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="logo-anime">
          <div id="container">Make your
            <div id="flip">
              <div>
                <div>Lunch🍔</div>
              </div>
              <div>
                <div>Lunch🍜</div>
              </div>
              <div>
                <div>Lunch🌮</div>
              </div>
            </div>AweSoMe!
          </div>
        </div>
      </el-col>
    </el-row>

    <Otenki/>
    <SelectCondition :selectCondition="selectCondition" ref="selectCondition"/>
    <Roulette/>
    <el-button @click="startRoulette">ぼたん(仮)</el-button>
    <StoreList/>
    <Footer/>
  </div>
</template>

<script>
import Otenki from "../components/Otenki";
import SelectCondition from "../components/SelectCondition";
import Roulette from "../components/Roulette.vue";
import StoreList from "../components/StoreList.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "OhiRoulette",
  components: {
    Otenki,
    SelectCondition,
    Roulette,
    StoreList,
    Footer
  },

  data() {
    return {
      selectCondition: {
        price: "",
        distance: "",
        category: ""
      },
      shoplist: []
    };
  },
  methods: {
    startRoulette(){
      //this.selectCondition = this.$refs.SelectCondition.selectCondition;
      this.shoplist = this.$refs.StoreList.shoplist;
      this.$refs.Roulette.selectStore(this.$refs.SelectCondition.selectConditionType, this.selectCondition, this.shoplist);
    }
  }
};
</script>

<style scoped>
/* eslint-disable */
@import url(https://fonts.googleapis.com/css?family=Roboto:700);

.logo-img img {
  /* font-family: "Noto Sans JP";
  font-size: 9em;
  color: #666;
  font-weight: 900;
  text-shadow: -1px 0 #bfc0c0, 0 1px #bfc0c0, 1px 0 #bfc0c0, 0 -1px #bfc0c0; */
  height: 70px;
  margin: 20px;
  float: right;
}

.logo-anime {
  margin: 0px 20px;
  font-family: "Roboto";
}

#container {
  color: #999;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
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
    margin-top: -170px;
  }

  33% {
    margin-top: -170px;
  }

  38% {
    margin-top: -80px;
  }

  66% {
    margin-top: -80px;
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
