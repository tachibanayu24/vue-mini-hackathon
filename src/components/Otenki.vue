<template>
  <div class="otenki">
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-card :body-style="{ padding: '5px' }">
          <el-row>
            <el-col :span="8">
              <img :src="this.weatherIcon" class="weather-img" alt>
            </el-col>
            <el-col :span="8">
              <el-row class="weather-desc">
                <span>{{this.results.list[0].weather[0].main}}</span>
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-row class="weather-desc">
                <span>{{Math.round(this.results.list[0].main.temp_max - 273.15)}}℃</span>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.otenki {
  margin: 40px 0px;
  font-size: 16px;
}

.weather-sun {
  color: #ff7b25;
}

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

.weather-img {
  height: 50px;
}

.weather-desc {
  margin: 12px;
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
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  name: "Otenki",

  data() {
    return {
      loading: true,
      //お天気情報
      results: "",
      weatherIcon: null,
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

  created() {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}http://api.openweathermap.org/data/2.5/forecast?q=Tokyo,jp&APPID=9e0c9db57b9d213706fa5521c8674369`
      )
      .then(response => {
        this.results = response.data;
        this.weatherIcon =
          "http://openweathermap.org/img/w/" +
          this.results.list[0].weather[0].icon +
          ".png";
        this.loading = false;
      });
  },
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
