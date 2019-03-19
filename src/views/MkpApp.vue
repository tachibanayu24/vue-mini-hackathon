<template>
  <!-- eslint-disable -->
  <div class="mkp-app">
    <div class="wrapper">
      <div class="logo-anime">
        <div id="container">
          <div class="floated text-make">Make</div>
          <div id="flip">
            <div>
              <div>🍤Lunch🍣</div>
            </div>
            <div>
              <div>🍜Lunch🥟</div>
            </div>
            <div>
              <div>🌮Lunch🍔</div>
            </div>
          </div>
          <div class="floated text-awesome">AweSoMe!</div>
        </div>
      </div>
    </div>
    <hr />

    <Otenki/>
    <SelectCondition :selectCondition="selectCondition" ref="SelectCondition"/>
    <Roulette :roulette="Roulette" ref="Roulette"/>
    <el-button @click="startRoulette">ぼたん(仮)</el-button>
    <StoreList :storeList="StoreList" ref="StoreList"/>
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
    startRoulette() {
      //this.selectCondition = this.$refs.SelectCondition.selectCondition;
      this.shoplist = this.$refs.StoreList.shoplist;
      this.$refs.Roulette.selectStore(
        this.$refs.SelectCondition.selectConditionType,
        this.selectCondition,
        this.shoplist
      );
    }
  }
};
</script>

<style scoped>
/* eslint-disable */
@import url(https://fonts.googleapis.com/css?family=Roboto:700);

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-anime {
  margin: 20px 0;
  font-family: "Roboto";
  position: relative;
  width: 250px;
}

.floated {
  float: left;
}

.text-make {
  margin-right: 10px;
  padding: 3px;
}

.text-awesome {
  position: absolute;
  right: 14px;
}

#container {
  color: #999;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  bottom: 45%;
}

#flip {
  height: 50px;
  width: 160px;
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
</style>
