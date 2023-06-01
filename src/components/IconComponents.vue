<script setup>
import { defineProps } from "vue";

const props = defineProps({
  class: String,
});
</script>
<template>
  <i :class="props.class"></i>
</template>
