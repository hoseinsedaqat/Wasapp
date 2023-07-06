<script setup>
// import
import { chats } from "@/stores/chats";
// data
const useChats = chats();
</script>

<template>
  <article id="mobile_calls">
    <main>
      <div class="link-shape mr-2">
        <icon-components :class="'bi bi-link-45deg cursor-pointer'"></icon-components>
      </div>
      <div>
        <h3 class="text-md text-white">Create call link</h3>
        <p class="text-xs">Share a link for your WhatsApp call</p>
      </div>
    </main>
    <main>
      <p class="text-sm text-white">Recent</p>
      <div
        class="user_calls"
        v-for="(calls, idx) in useChats.inbox_message"
        :key="(calls, idx)"
      >
        <div>
          <div class="mr-2">
            <img :src="calls.userImg" alt="my_status" class="w-12 h-12 rounded-full" />
          </div>
          <div>
            <h3 class="text-sm">{{ calls.userName }}</h3>
            <p class="text-xs">May {{ Math.abs(idx - 11) }}, {{ calls.lastTime }}</p>
          </div>
        </div>
        <div>
          <icon-components
            :class="'bi bi-camera-video-fill cursor-pointer text-green-500'"
          ></icon-components>
        </div>
      </div>
    </main>
  </article>
</template>
