<script setup>
// import
import { useRoute, useRouter } from "vue-router";
import { width_check } from "@/utils/widthCheck";
import { chats } from "@/stores/chats";
import { onMounted, ref } from "vue";
// data
const router = useRouter();
const user_chats = ref({});
const route = useRoute();
const useChats = chats();
// methods
function back_to_chat() {
  if(!width_check()){
    router.push(`/chat/${route.params.id}`);
  }else{
    router.push(`/mobile/chat/${route.params.id}`);
  }
}
// mounted
onMounted(() => {
  useChats.inbox_message.forEach((inbox) => {
    if (inbox.userId === route.params.id) {
      user_chats.value = inbox;
    }
  });
});
</script>
<template>
  <section id="setting">
    <main class="bg-base-200">
      <icon-components
        @click="back_to_chat"
        :class="'bi bi-arrow-left text-xl cursor-pointer btn border-none bg-base-200'"
      ></icon-components>
      <p class="mx-3">Contact Info</p>
    </main>
    <main class="my-2 bg-base-200">
      <div>
        <img
          :src="user_chats.userImg"
          alt="User_Profile_Img"
          class="w-40 h-40 rounded-full"
        />
      </div>
      <div>
        <p class="text-xl">{{ user_chats.userName }}</p>
      </div>
    </main>
    <main class="my-2 bg-base-200">
      <article class="my-3">
        <div>
          <p class="text-cyan-400">Media, Links and Documents</p>
        </div>
        <div>
          <icon-components
            :class="'bi bi-chevron-right text-xl cursor-pointer'"
          ></icon-components>
        </div>
      </article>
      <article>
        <div class="grid grid-cols-3 gap-2">
          <div v-for="img in 3" :key="img">
            <img src="@/assets/images/Background/Empty_Img.jpg" alt="Empty_Image" />
          </div>
        </div>
      </article>
    </main>
    <main class="my-2 bg-base-200">
      <article class="setting-option">
        <div>
          <h3 class="text-lg text-white">Mute Notifications</h3>
        </div>
        <div>
          <input type="checkbox" class="checkbox checkbox-sm" />
        </div>
      </article>
      <article class="setting-option">
        <div>
          <h3 class="text-lg text-white">Starred Messages</h3>
        </div>
        <div>
          <icon-components
            :class="'bi bi-chevron-right text-xl cursor-pointer'"
          ></icon-components>
        </div>
      </article>
      <article class="setting-option">
        <div>
          <h3 class="text-lg text-white">Disappearing Messages</h3>
          <span class="badge badge-neutral">off</span>
        </div>
        <div>
          <icon-components
            :class="'bi bi-chevron-right text-xl cursor-pointer'"
          ></icon-components>
        </div>
      </article>
    </main>
    <main class="my-2 bg-base-200">
      <p class="text-cyan-400">About and phone number</p>
      <div class="my-2">
        <p class="text-white text-lg">{{ user_chats.lastMessage }}</p>
      </div>
      <div>
        <p class="text-white text-lg">+{{ user_chats.userNumber }}</p>
      </div>
    </main>
    <main class="my-2 bg-base-200">
      <div class="group-header">
        <p class="text-cyan-400">Groups in common</p>
        <p class="text-cyan-400">3</p>
      </div>
      <article class="my-3">
        <div>
          <img
            src="@/assets/images/Groups/Node.png"
            alt="Node_Group"
            class="w-12 h-12 border-red-50 rounded-full"
          />
        </div>
        <div class="mx-4">
          <p class="text-white">Node.js Group</p>
          <p class="text-xs">
            Hosein Sedaqat, Elmira Jamlian, Mohammadreza Salari, Nima...
          </p>
        </div>
      </article>
      <article class="my-3">
        <div>
          <img
            src="@/assets/images/Groups/React.png"
            alt="React_Group"
            class="w-12 h-12 border-red-50 rounded-full back"
          />
        </div>
        <div class="mx-4">
          <p class="text-white">React.js Group</p>
          <p class="text-xs">
            Hosein Sedaqat, Elmira Jamlian, Mohammadreza Salari, Nima...
          </p>
        </div>
      </article>
      <article class="my-3">
        <div>
          <img
            src="@/assets/images/Groups/Vue.png"
            alt="Vue_Group"
            class="w-12 h-12 border-red-50 rounded-full"
          />
        </div>
        <div class="mx-4">
          <p class="text-white">Vue.js Group</p>
          <p class="text-xs">
            Hosein Sedaqat, Elmira Jamlian, Mohammadreza Salari, Nima...
          </p>
        </div>
      </article>
    </main>
    <main class="my-2 bg-base-200">
      <div>
        <icon-components
        :class="'bi bi-slash-circle text-lg cursor-pointer text-red-500'"
      ></icon-components>
      </div>
      <div class="text-red-500">
        Block
      </div>
    </main>
    <main class="my-2 bg-base-200">
      <div>
        <icon-components
        :class="'bi bi-hand-thumbs-down text-lg cursor-pointer text-red-500'"
      ></icon-components>
      </div>
      <div class="text-red-500">
        Report contact
      </div>
    </main>
    <main class="my-2 bg-base-200">
      <div>
        <icon-components
        :class="'bi bi-trash-fill text-lg cursor-pointer text-red-500'"
      ></icon-components>
      </div>
      <div class="text-red-500">
        Delete chat
      </div>
    </main>
  </section>
</template>
