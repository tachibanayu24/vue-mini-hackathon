<template>
  <div class="mkp-app">
    <h1>select conditionだよ</h1>
    <div>
      <el-radio-group v-model="selectCondition">
        <el-radio-button label="条件指定"></el-radio-button>
        <el-radio-button label="ランダム"></el-radio-button>
      </el-radio-group>

      <!-- 条件指定の場合 -->
      <!-- <el-form-item v-if="selectCondition === '条件指定'"> -->
      <el-row :justify="center">
        <el-col :span="4"></el-col>
        <el-col :span="4">
          <h4>おねだん</h4>
        </el-col>
        <el-col :span="16">
          <el-radio-group v-model="price">
            <el-radio-button label="~500円"></el-radio-button>
            <el-radio-button label="501~1000円"></el-radio-button>
            <el-radio-button label="1001円~"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <h4>とおさ</h4>
        </el-col>
        <el-col>
          <el-radio-group v-model="distance">
            <el-radio-button label="~5分"></el-radio-button>
            <el-radio-button label="6~10分"></el-radio-button>
            <el-radio-button label="10分～"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <h4>しゅるい</h4>
        </el-col>
        <el-col>
          <el-radio-group v-model="distance">
            <el-radio-button label="和食"></el-radio-button>
            <el-radio-button label="洋食"></el-radio-button>
            <el-radio-button label="中華"></el-radio-button>
            <el-radio-button label="その他"></el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>

      </div>
    </div>
  <!-- </el-form-item> -->
</template>


<script>
export default {
  name: "SelectCondition",
  data() {
    return {};
    selectCondition: "ランダム";
  }
};
</script>