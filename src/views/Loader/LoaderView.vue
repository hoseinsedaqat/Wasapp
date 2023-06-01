<script setup lang="ts">
// import
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// data
const router = useRouter();
const progress_bar_size = ref(0);
// mounted
onMounted(() => {
  setInterval(() => {
    progress_bar_size.value += 1;
  }, 50);

  setTimeout(() => {
    router.push("/web/whatsapp");
  }, 5000);
});
</script>

<template>
  <section id="loader">
    <main>
      <icon-components :class="'bi bi-whatsapp text-4xl'"></icon-components>
    </main>
    <main>
      <progress
        class="progress progress-accent w-96 my-5 h-1"
        :value="progress_bar_size"
        max="100"
      ></progress>
    </main>
    <main>
      <h3 class="text-white text-lg my-2">Whatsapp</h3>
    </main>
    <main>
      <div>
        <p class="text-xs">
          <icon-components :class="'bi bi-lock-fill'"></icon-components>
          End-to-end encrypted. Built by Hosein Sedaqat 2023.
        </p>
      </div>
    </main>
  </section>
</template>
