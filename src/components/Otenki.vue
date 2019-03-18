<template>
  <div>


    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-card :body-style="{ padding: '5px' }">
          <el-row>
            <el-col :span="4">
              <img src="..\assets\sunny.png" class="image">
            </el-col>
            <el-col :span="8">
              <el-row>
                <span>{{this.beta_otenkiInformation.temp}}℃</span>
              </el-row>

              <el-row>
                <span>{{this.beta_otenkiInformation.main}}</span>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <span>15℃/4℃</span>
              </el-row>
              <el-row>
                <span>降水確率：10％</span>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>


<script>
export default {
  name: "Otenki",

  data() {
    return {
      //お天気情報
      otenkiInformation: {
        temp: null,
        temp_max: null,
        temp_min: null,
        icon: null,
        main: null
      },
      beta_otenkiInformation: {
        temp: 14,
        temp_max: 15,
        temp_min: 4,
        icon: "sunny.png",
        main: "晴れ"
      }
    };
  },

  // ライフサイクルフック処理を記載します。
  created() {
    //ここでテーブルを空にする
  },

  // 業務処理を記載します。
  methods: {
    AfterCreatedOtenki() {
      this.otenkiInformation = null;
      this.otenkiInfornation.temp = this.beta_otenkiInformation.temp;
      this.otenkiInfornation.temp_max = this.beta_otenkiInformation.temp_max;
      this.otenkiInfornation.temp_min = this.beta_otenkiInformation.temp_min;
      this.otenkiInfornation.icon = this.beta_otenkiInformation.icon;
      this.otenkiInfornation.main = this.beta_otenkiInformation.main;
    }
  }
};
</script>
