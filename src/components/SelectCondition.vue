<template>
  <!-- eslint-disable -->
  <div class="select-condition">
    <div>
      <el-radio-group v-model="selectConditionType">
        <el-radio-button label="条件指定"></el-radio-button>
        <el-radio-button label="ランダム"></el-radio-button>
      </el-radio-group>

      <!-- 条件指定の場合 -->
      <div v-if="selectConditionType === '条件指定'">
        <el-row justify="center" type="flex">
          <el-col :span="2">
            <h4>おねだん</h4>
          </el-col>
          <el-col :span="6">
            <el-radio-group v-model="selectCondition.price">
              <el-radio-button
                v-for="(price, idx) in price"
                :label="price.value"
                :key="price.value"
                :id="`price-id-${idx}`"
              >{{ price.label }}</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-row justify="center" type="flex">
          <el-col :span="2">
            <h4>とおさ</h4>
          </el-col>
          <el-col :span="6">
            <el-radio-group v-model="selectCondition.distance">
              <el-radio-button
                v-for="(distance, idx) in distance"
                :label="distance.value"
                :key="distance.value"
                :id="`distance-id-${idx}`"
              >{{ distance.label }}</el-radio-button>
              </el-radio-group>
          </el-col>
        </el-row>

        <el-row justify="center" type="flex">
          <el-col :span="2">
            <h4>しゅるい</h4>
          </el-col>
          <el-col :span="6">
            <el-radio-group v-model="selectCondition.category">
              <el-radio-button
                v-for="(category, idx) in category"
                :label="category.value"
                :key="category.value"
                :id="`category-id-${idx}`"
              >{{ category.label }}</el-radio-button>
              </el-radio-group>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "SelectCondition",
  props: ["selectCondition"],
  data() {
    return {
      price: [
        { label: "~500円", value: 1 },
        { label: "501~1000円", value: 2 },
        { label: "1000円～", value: 3 }
      ],
      distance: [
        { label: "~5分", value: 1 },
        { label: "6~10分", value: 2 },
        { label: "10分～", value: 3 }
      ],
      category: [
        { label: "和食", value: 1 },
        { label: "洋食", value: 2 },
        { label: "中華", value: 3 },
        { label: "その他", value: 4 }
      ],
      selectConditionType: "ランダム"
    };
  },
  created() {},
  computed: {},
  methods: {
    /**
     * データを初期化する
     */
    initData() {
      this.selectCondition.price = "";
      this.selectCondition.distance = "";
      this.selectCondition.category = "";
    }
  }
};
</script>

<style scoped>
</style>
