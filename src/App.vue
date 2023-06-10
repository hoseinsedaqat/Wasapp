<script setup>
// import
import { ref, onMounted } from "vue";
import HomeView from "@/views/Home/HomeView.vue";
import LoaderView from "@/views/Loader/LoaderView.vue";
// import MobileView from "@/views/Mobile/MobileView.vue";
import { width_check } from "@/utils/widthCheck";
// data
const progress_loader = ref(true);
// mounted
onMounted(() => {
  setTimeout(() => {
    progress_loader.value = false;
  }, 5000);
});
</script>

<template>
  <loader-view v-if="progress_loader"></loader-view>
  <home-view v-if="!progress_loader && !width_check()"></home-view>
  <router-view v-if="!progress_loader && width_check()"></router-view>
</template>
