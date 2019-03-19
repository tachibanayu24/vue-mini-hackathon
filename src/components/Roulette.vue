<template>
<!-- eslint-disable -->
  <div class="mkp-app">
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
    };
  },

  methods: {
    async selectStore(selectConditionType, selectCondition, shopList) {
      var kouhoStoreList = [];
      for (var i = 0; i < shopList.length; i++) {
        var tfFlug = true;
        if (selectConditionType !== "ランダム") {
          if (
            selectCondition.price !== "" &&
            shopList[i].price !== selectCondition.price
          ) {
            tfFlug = false;
          }
          if (
            selectCondition.distance !== "" &&
            shopList[i].distance !== selectCondition.distance
          ) {
            tfFlug = false;
          }
          if (
            selectCondition.category !== "" &&
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
