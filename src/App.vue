<script setup>
// import
import { ref, onMounted } from "vue";
import HomeView from "@/views/Home/HomeView.vue";
import LoaderView from "@/views/Loader/LoaderView.vue";
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
  <home-view v-else></home-view>
</template>
