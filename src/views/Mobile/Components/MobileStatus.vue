<script setup>
// import
import { chats } from "@/stores/chats";
import { inject } from "vue";
// data
const swal = inject("$swal");
const useChats = chats();
// methods
async function viewStatus(img, name) {
  swal({
    imageWidth: 300,
    imageHeight: 300,
    imageUrl: img,
    showConfirmButton: false,
    text: `${name}_Status`,
    backdrop: "rgba(0,0,0,90%)",
  });
}
</script>

<template>
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
      <div
        v-for="(status, idx) in useChats.inbox_message"
        :key="(status, idx)"
        class="user_status"
        @click="viewStatus(status.statusImg, status.userName)"
      >
        <div class="mr-3">
          <img :src="status.userImg" alt="my_status" class="w-12 h-12 rounded-full" />
        </div>
        <div>
          <h3 class="text-md">{{ status.userName }}</h3>
          <p class="text-xs">Today, {{ status.lastTime }}</p>
        </div>
      </div>
    </main>
  </article>
</template>
