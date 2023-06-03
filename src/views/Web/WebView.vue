<script setup lang="ts"></script>

<template>
  <section id="web" class="p-1">
    <main class="my-5">
      <img
        src="@/assets/images/WhatsApp_Connected.jpg"
        alt="Connected_Whatsapp"
        class="w-40 h-40 rounded-full"
      />
    </main>
    <main>
      <h1 class="text-2xl">Keep your phone connected</h1>
      <p>
        WhatsApp connects to your phone to sync messages. To reduce data usage, connect
        your phone to Wi-Fi.
      </p>
    </main>
    <main>
      <p class="text-sm flex items-center">
        <icon-components
          :class="'bi bi-laptop mx-2 text-lg cursor-pointer'"
        ></icon-components
        >WhatsApp is available for Mac.
        <span class="text-accent cursor-pointer mx-1"> Get it here</span>
      </p>
    </main>
  </section>
</template>
