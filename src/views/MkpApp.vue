<template>
  <div class="mkp-app">
    <h1>おひる～れっと</h1>
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
