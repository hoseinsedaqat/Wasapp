<script setup>
import { chats } from "@/stores/chats";
const useChats = chats();
function nice(text){
  alert(`${text}`)
}
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
        <p @click="nice('chats')">Chats</p>
        <p @click="nice('status')">Status</p>
        <p @click="nice('calls')">Calls</p>
      </div>
    </section>
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
  </section>
</template>
