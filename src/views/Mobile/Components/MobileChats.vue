<script setup>
// import
import { chats } from "@/stores/chats";
// data
const useChats = chats();
</script>

<template>
  <article
    id="mobile_chats"
    v-for="(inbox, idx) in useChats.inbox_message"
    :key="(inbox, idx)"
  >
    <router-link :to="`/mobile/chat/${inbox.userId}`">
      <div>
        <img :src="inbox.userImg" alt="User-Profile" class="w-12 h-12 rounded-full" />
        <div>
          <h3 class="text-md">{{ inbox.userName }}</h3>
          <p class="text-xs">
            {{
              inbox.lastMessage.length > 25
                ? inbox.lastMessage.substring(0, 26) + "..."
                : inbox.lastMessage
            }}
          </p>
        </div>
      </div>
      <div>
        <p class="text-xs">{{ inbox.lastTime }}</p>
        <p class="my-1">
          <icon-components :class="'bi bi-chevron-down cursor-pointer'"></icon-components>
        </p>
      </div>
    </router-link>
  </article>
</template>
