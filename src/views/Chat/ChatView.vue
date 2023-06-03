<script setup>
import { inbox_message } from "@/data/inboxMessage";
import { watch, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const user_chats = ref({});

watch(
  () => route.params.id,
  () => {
    console.log(`MyCoolComponent - watch route.name changed to ${route.params.id}`);
    inbox_message.forEach((inbox) => {
      if (inbox.userId === route.params.id) {
        user_chats.value = inbox;
      }
    });
    console.log(user_chats.value);
  }
);

onMounted(() => {
  inbox_message.forEach((inbox) => {
    if (inbox.userId === route.params.id) {
      user_chats.value = inbox;
    }
  });
  console.log(user_chats.value);
});
</script>
<template>
  <section id="chat">
    <aside class="bg-base-200">
      <main>
        <img
          :src="user_chats.userImg"
          alt="User-Profile"
          class="w-12 h-12 rounded-full"
        />
        <div>
          <p>{{ user_chats.userName }}</p>
          <p class="text-xs">online</p>
        </div>
      </main>
      <main>
        <div>
          <a href="#my_modal_8">
            <icon-components
              :class="'bi bi-search text-xl cursor-pointer'"
            ></icon-components>
          </a>
        </div>
        <!-- Modal Component -->
        <div class="modal" id="my_modal_8">
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
        </div>
        <!-- Modal Component -->
        <div class="dropdown dropdown-end">
          <icon-components
            tabindex="0"
            :class="'bi bi-three-dots-vertical text-xl cursor-pointer'"
          ></icon-components>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Contact Info</a></li>
            <li><a>Select Message</a></li>
            <li><a>Mute notifications</a></li>
            <li><a>Clear message</a></li>
            <li><a>Delete message</a></li>
          </ul>
        </div>
      </main>
    </aside>
    <aside>
      <div class="chat chat-start" v-for="x in 5" :key="x">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img :src="user_chats.userImg" />
          </div>
        </div>
        <div class="chat-bubble">You were the Chosen One!</div>
        <div class="chat-footer">
          <time class="text-xs text-white">12:45</time>
        </div>
      </div>
      <div class="chat chat-end" v-for="x in 5" :key="x">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img src="@/assets/images/Users/Hosein_Sedaqat.jpg" />
          </div>
        </div>
        <div class="chat-bubble">I hate you!</div>
        <div class="chat-footer">
          <time class="text-xs text-white">12:46</time>
        </div>
      </div>
    </aside>
    <aside class="bg-base-200">
      <main>
        <icon-components
          :class="'bi bi-emoji-smile-fill cursor-pointer text-2xl'"
        ></icon-components>
      </main>
      <main>
        <icon-components
          :class="'bi bi-paperclip cursor-pointer text-2xl'"
        ></icon-components>
      </main>
      <main>
        <div>
          <input type="text" placeholder="Type a message" />
        </div>
      </main>
      <main>
        <icon-components
          :class="'bi bi-send-fill cursor-pointer text-2xl'"
        ></icon-components>
      </main>
    </aside>
  </section>
</template>
