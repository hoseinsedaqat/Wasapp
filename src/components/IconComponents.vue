<script setup>
// import
import { defineProps } from "vue";
// props
const props = defineProps({
  class: String,
});
</script>

<template>
  <i :class="props.class"></i>
</template>
