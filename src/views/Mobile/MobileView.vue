<script setup>
// import
import { onMounted, ref, inject } from "vue";
import { chats } from "@/stores/chats";
// data
const mobile_status = ref(false);
const mobile_calls = ref(false);
const mobile_chats = ref(true);
const swal = inject('$swal');
const useChats = chats();
// methods
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
async function viewStatus(img){
  swal({
    imageWidth: 300,
    imageHeight: 300,
    imageUrl: img,
    showConfirmButton: false,
  })
}
// mounted
onMounted(() => {
  show_chats();
});
</script>
<template>
  <section id="mobile" class="bg-base-300">
    <!-- Header -->
    <header class="bg-base-100">
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
    <section id="mobile_section" class="bg-base-100">
      <div>
        <p @click="show_chats" :class="mobile_chats ? 'for_show_which_part' : ''">
          Chats
        </p>
        <p @click="show_status" :class="mobile_status ? 'for_show_which_part' : ''">
          Status
        </p>
        <p @click="show_calls" :class="mobile_calls ? 'for_show_which_part' : ''">
          Calls
        </p>
      </div>
    </section>
    <!-- chats -->
    <template v-if="mobile_chats">
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
              <icon-components
                :class="'bi bi-chevron-down cursor-pointer'"
              ></icon-components>
            </p>
          </div>
        </router-link>
      </article>
    </template>
    <template v-if="mobile_status">
      <article id="mobile_status">
        <main>
          <div class="mr-3">
            <img
              src="@/assets/images/Users/Hosein_Sedaqat.jpg"
              alt="my_status"
              class="w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h3 class="text-md">My Status</h3>
            <p class="text-xs">tap to add status update</p>
          </div>
        </main>
        <main>
          <p>recent updats</p>
          <div v-for="(status,idx) in useChats.inbox_message" :key="(status,idx)" class="user_status" @click="viewStatus(status.statusImg)">
            <div class="mr-3">
              <img
                :src="status.userImg"
                alt="my_status"
                class="w-12 h-12 rounded-full"
              />
            </div>
            <div>
              <h3 class="text-md">{{status.userName}}</h3>
              <p class="text-xs">Today, {{ status.lastTime }}</p>
            </div>
          </div>
        </main>
      </article>
    </template>
    <template v-if="mobile_calls">
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
          <div class="user_calls">
            <div>
              <div class="mr-2">
                <img
                  src="@/assets/images/Users/Hosein_Sedaqat.jpg"
                  alt="my_status"
                  class="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 class="text-sm">Hosein Sedaqat</h3>
                <p class="text-xs">May 26, 14:57</p>
              </div>
            </div>
            <div>
              <icon-components :class="'bi bi-camera-video-fill cursor-pointer text-green-500'"></icon-components>
            </div>
          </div>
          <div class="user_calls">
            <div>
              <div class="mr-2">
                <img
                  src="@/assets/images/Users/Nima_Arefi.jpg"
                  alt="my_status"
                  class="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 class="text-sm">Hosein Sedaqat</h3>
                <p class="text-xs">May 26, 14:57</p>
              </div>
            </div>
            <div>
              <icon-components :class="'bi bi-camera-video-fill cursor-pointer text-green-500'"></icon-components>
            </div>
          </div>
          <div class="user_calls">
            <div>
              <div class="mr-2">
                <img
                  src="@/assets/images/Users/Elmira_Jamalian.jpg"
                  alt="my_status"
                  class="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <h3 class="text-sm">Hosein Sedaqat</h3>
                <p class="text-xs">May 26, 14:57</p>
              </div>
            </div>
            <div>
              <icon-components :class="'bi bi-camera-video-fill cursor-pointer text-green-500'"></icon-components>
            </div>
          </div>
        </main>
      </article>
    </template>
  </section>
</template>
