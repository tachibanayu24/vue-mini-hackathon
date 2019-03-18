<template>
  <div class="mkp-app">
    <h1>ここにルーレット作るで</h1>
    
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
          }
        ]
      };
      
    },

    methods: {
      selectStore() {
        var randnum = Math.floor( Math.random() * this.storeList.length );
        console.log(randnum);
        this.selectedStore = this.storeList[randnum].name;
      }
    }

  };
</script>