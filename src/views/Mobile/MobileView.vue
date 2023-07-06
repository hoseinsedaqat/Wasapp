<script setup>
// import
import MobileStatus from "./Components/MobileStatus.vue";
import MobileChats from "./Components/MobileChats.vue";
import MobileCalls from "./Components/MobileCalls.vue";
import { onMounted, ref } from "vue";
// data
const mobile_status = ref(false);
const mobile_calls = ref(false);
const mobile_chats = ref(true);
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
          <a href="#search">
            <icon-components
              :class="'bi bi-search text-xl cursor-pointer'"
            ></icon-components>
          </a>
        </div>
        <!-- Modal Component -->
        <div class="modal" id="search">
          <div class="modal-box">
            <div class="modal-action">
              <a href="#" class="modal-skelton">
                <h3 class="text-white text-lg">Search</h3>
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
    <mobile-chats v-if="mobile_chats"></mobile-chats>
    <!-- Status -->
    <mobile-status v-if="mobile_status"></mobile-status>
    <!-- Calls -->
    <mobile-calls v-if="mobile_calls"></mobile-calls>
  </section>
</template>
