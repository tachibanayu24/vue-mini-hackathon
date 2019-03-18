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
          <!-- <el-form-item label="価格" prop="price"> -->
          <el-radio-group v-model="price">
            <el-radio-button label="~500円"></el-radio-button>
            <el-radio-button label="501~1000円"></el-radio-button>
            <el-radio-button label="1001円~"></el-radio-button>
          </el-radio-group>
          <!-- </el-form-item> -->
        </el-col>
      </el-row>

      <el-row justify="center" type="flex">
        <el-col :span="2">
          <h4>とおさ</h4>
        </el-col>
        <el-col :span="6">
          <!-- <el-form-item label="距離" prop="distance"> -->
          <el-radio-group v-model="distance">
            <el-radio-button label="~5分"></el-radio-button>
            <el-radio-button label="6~10分"></el-radio-button>
            <el-radio-button label="10分～"></el-radio-button>
          </el-radio-group>
          <!-- </el-form-item> -->
        </el-col>
      </el-row>

      <el-row justify="center" type="flex">
        <el-col :span="2">
          <h4>しゅるい</h4>
        </el-col>
        <el-col :span="6">
          <el-radio-group v-model="category">
            <el-radio-button label="和食"></el-radio-button>
            <el-radio-button label="洋食"></el-radio-button>
            <el-radio-button label="中華"></el-radio-button>
            <el-radio-button label="その他"></el-radio-button>
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
      selectConditionType: "ランダム"
    };
  },
  created() {},
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
