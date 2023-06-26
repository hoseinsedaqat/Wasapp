<script setup>
// import
import { width_check } from "@/utils/widthCheck";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
// data
const progress_bar_size = ref(0);
const router = useRouter();
// mounted
onMounted(() => {
  setInterval(() => {
    progress_bar_size.value += 1;
  }, 50);

  setTimeout(() => {
    if (!width_check()) {
      router.push("/web/whatsapp");
    } else {
      router.push("/mobile/whatsapp");
    }
  }, 5000);
});
</script>

<template>
  <section id="loader">
    <main class="animate__animated animate__heartBeat">
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
