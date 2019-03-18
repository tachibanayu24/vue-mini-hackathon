<template>
  <div class="store-list">
    <h4>店舗一覧</h4>
    <div class="store-list-table">
      <el-table :data="shoplist" style="width:100%" empty-text="店舗が登録されていません。" align="center">
        <el-table-column label="店舗名" prop="name" align="center" width="300" sortable/>
        <el-table-column label="価格" prop="price" align="center" width="300" sortable/>
        <el-table-column label="距離" prop="distance" align="center" width="300" sortable/>
        <el-table-column label="ジャンル" prop="category" align="center" width="300" sortable/>
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.store-list {
  text-align: center;
  margin: 50px;
}
.store-list-table {
  text-align: center;
}
</style>

<script>
export default {
  name: "ShopList",
  data() {
    return {
      shoplist: [
        {
          name: "寿司　やまと",
          price: "501~1000円",
          distance: "6~10分",
          category: "和食"
        },
        {
          name: "ミニストップ",
          price: "~500円",
          distance: "~5分",
          category: "その他"
        },
        {
          name: "カプリチョーザ",
          price: "1001円~",
          distance: "10分~",
          category: "洋食"
        },
        {
          name: "舎鈴",
          price: "1001円~",
          distance: "6~10分",
          category: "中華"
        },
        {
          name: "社食",
          price: "501~1000円",
          distance: "10分~",
          category: "その他"
        },
        {
          name: "チンタンタン",
          price: "501~1000円",
          distance: "6~10分",
          category: "中華"
        },
        {
          name: "サイゼリヤ",
          price: "~500円",
          distance: "6~10分",
          category: "洋食"
        },
      ]
    };
  }
};
</script>
