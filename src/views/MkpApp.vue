<template>
  <div class="mkp-app">
    <img class="logo" src="../assets/logo.png" alt>
    <Otenki />
    <SelectCondition />
    <Roulette />
    <StoreList />
  </div>
</template>

<script>
import Otenki from "../components/Otenki";
import SelectCondition from "../components/SelectCondition";
import Roulette from "../components/Roulette.vue";
import StoreList from "../components/StoreList.vue";

export default {
  name: "OhiRoulette",
  components: {
    Otenki,
    SelectCondition,
    Roulette,
    StoreList
  }
};
</script>

<style scoped>
  .logo {
    height: 70px;
    margin: 20px;
  }
</style>

