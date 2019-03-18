<template>
  <div class="mkp-app">
    <el-form>
      <h2>{{selectedStore}}</h2>
      <el-button @click="selectStore">ぼたん(仮)</el-button>
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
        storeList: [
          {
            name: "A",
            price: 100,
            distance: 5,
            category: "中華"
          },
          {
            name: "B",
            price: 100,
            distance: 5,
            category: "中華"
          },
          {
            name: "だめなお店",
            price: 600,
            distance: 5,
            category: "中華"
          },
        ],

        selectedCondition: {
          price: 500,
          distance: 5,
          category : "中華"
        }
      };
    },

    methods: {
      async selectStore() {
        var kouhoStoreList = [];
        for(var i = 0; i < this.storeList.length; i++) {
          var tfFlug = true;
          if(this.selectedCondition.price !== null && this.storeList[i].price > this.selectedCondition.price) {tfFlug = false;}
          if(this.selectedCondition.distance !== null && this.storeList[i].distance > this.selectedCondition.distance) {tfFlug = false;}
          if(this.selectedCondition.category !== null && this.storeList[i].category !== this.selectedCondition.category) {tfFlug = false;}
          if(tfFlug === true) {
            kouhoStoreList.push(this.storeList[i]);
          }
        }
        if(kouhoStoreList.length === 0) {
          this.selectedStore = "該当する店無いよ"
        }else{
          var randnum = Math.floor( Math.random() * kouhoStoreList.length );
          this.selectedStore = kouhoStoreList[randnum].name;
        }
      }
    }
  };
</script>
