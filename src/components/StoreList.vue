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
          name: "和食じゃあああああ",
          price: "501~1000円",
          distance: "~5分",
          category: "和食"
        },
        {
          name: "コンビニA店",
          price: "~500円",
          distance: "~5分",
          category: "その他"
        },
        {
    name: "洋食C店",
    price: "501~1000円",
    distance: "6~10分",
    category: "洋食"
  },
  {
    name: "焼肉J店",
    price: "1001円~",
    distance: "6~10分",
    category: "その他"
  },
  {
    name: "中華903号店",
    price: "1001円~",
    distance: "10分～",
    category: "中華"
  },
      ]
    };
  }
};
</script>
