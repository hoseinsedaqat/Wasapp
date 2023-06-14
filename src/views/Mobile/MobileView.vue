<script setup>
import { onMounted, ref } from "vue";
import { chats } from "@/stores/chats";
const useChats = chats();
const mobile_chats = ref(true);
const mobile_status = ref(false);
const mobile_calls = ref(false);
function show_chats() {
  mobile_chats.value = true;
  mobile_status.value = false;
  mobile_calls.value = false;
}
function show_status() {
  mobile_chats.value = false;
  mobile_status.value = true;
  mobile_calls.value = false;
}
function show_calls() {
  mobile_chats.value = false;
  mobile_status.value = false;
  mobile_calls.value = true;
}

onMounted(() => {
  show_chats();
});
</script>
<template>
  <section id="mobile">
    <!-- Header -->
    <header>
      <main>
        <h3 class="text-lg">WhatsApp</h3>
      </main>
      <main>
        <div>
          <icon-components :class="'bi bi-camera-fill text-xl'"></icon-components>
        </div>
        <div>
          <a href="#search_message">
            <icon-components
              :class="'bi bi-search text-xl cursor-pointer'"
            ></icon-components>
          </a>
        </div>
        <!-- Modal Component -->
        <div class="modal" id="search_message">
          <div class="modal-box">
            <div class="modal-action">
              <a href="#" class="modal-skelton">
                <h3 class="text-white text-lg">Search Message</h3>
                <icon-components
                  :class="'bi bi-x text-3xl cursor-pointer'"
                ></icon-components>
              </a>
            </div>
            <main id="modal_input">
              <div>
                <icon-components :class="'bi bi-search cursor-pointer'"></icon-components>
              </div>
              <div>
                <input type="text" placeholder="Search..." />
              </div>
            </main>
          </div>
          <!-- Modal Component -->
        </div>
        <div class="dropdown dropdown-end">
          <icon-components
            tabindex="0"
            :class="'bi bi-three-dots-vertical text-xl cursor-pointer'"
          ></icon-components>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>New group</a></li>
            <li><a>New broadcast</a></li>
            <li><a>Linked devices</a></li>
            <li><a>Starred messages</a></li>
            <li><a>Setting</a></li>
          </ul>
        </div>
      </main>
    </header>
    <!-- Chats Call Status -->
    <section id="mobile_section">
      <div>
        <p @click="show_chats" :class="mobile_chats ? 'for_show_which_part' : ''">Chats</p>
        <p @click="show_status" :class="mobile_status ? 'for_show_which_part' : ''">Status</p>
        <p @click="show_calls" :class="mobile_calls ? 'for_show_which_part' : ''">Calls</p>
      </div>
    </section>
    <!-- chats -->
    <template v-if="mobile_chats">
      <article
        id="mobile_chats"
        v-for="(inbox, idx) in useChats.inbox_message"
        :key="(inbox, idx)"
        class="bg-base-300"
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
              <icon-components
                :class="'bi bi-chevron-down cursor-pointer'"
              ></icon-components>
            </p>
          </div>
        </router-link>
      </article>
    </template>
    <template v-if="mobile_status">
      <article class="bg-base-300">
        <p>status</p>
      </article>
    </template>
    <template v-if="mobile_calls">
      <article class="bg-base-300">
        <p>calls</p>
      </article>
    </template>
  </section>
</template>
