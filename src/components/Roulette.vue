<template>
<!-- eslint-disable -->
  <div class="mkp-app">

    <h1>ここにルーレット作るで</h1>

    <el-form>
      <h2>{{selectedStore}}</h2>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedStore: "今日のランチはこちら",

      // storeList: [{
      //   name: null,
      //   price: null,
      //   distance: null,
      //   category: null
      // }]
      // storeList: [
      //   {
      //     name: "A",
      //     price: 100,
      //     distance: 5,
      //     category: "中華"
      //   },
      //   {
      //     name: "B",
      //     price: 100,
      //     distance: 5,
      //     category: "中華"
      //   },
      //   {
      //     name: "だめなお店",
      //     price: 600,
      //     distance: 5,
      //     category: "中華"
      //   }
      // ],

      // selectedCondition: {
      //   price: 500,
      //   distance: 5,
      //   category: "中華"
      // }
    };
  },

  methods: {
    async selectStore(selectConditionType, selectCondition, shopList) {
      var kouhoStoreList = [];
      for (var i = 0; i < shopList.length; i++) {
        var tfFlug = true;
        if(selectConditionType !== "ランダム") {
          if (
            selectCondition.price !== null &&
            shopList[i].price > selectCondition.price
          ) {
            tfFlug = false;
          }
          if (
            selectCondition.distance !== null &&
            shopList[i].distance > selectCondition.distance
          ) {
            tfFlug = false;
          }
          if (
            selectCondition.category !== null &&
            shopList[i].category !== selectCondition.category
          ) {
            tfFlug = false;
          }
        }
        if (tfFlug === true) {
          kouhoStoreList.push(shopList[i]);
        }
      }
      if (kouhoStoreList.length === 0) {
        this.selectedStore = "該当する店無いよ";
      } else {
        var randnum = Math.floor(Math.random() * kouhoStoreList.length);
        this.selectedStore = kouhoStoreList[randnum].name;
      }
    }
  }
};
</script>
