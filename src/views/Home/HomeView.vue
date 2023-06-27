<script setup>
// import
import { chats } from "@/stores/chats";
// data
const useChats = chats();
</script>

<template>
  <div id="layout">
    <section id="home-container">
      <!-- Sidebar Header -->
      <aside class="bg-base-300">
        <main>
          <img
            src="@/assets/images/Users/Hosein_Sedaqat.jpg"
            alt="User-Profile"
            class="w-12 h-12 rounded-full"
          />
        </main>
        <main>
          <div>
            <icon-components
              :class="'bi bi-plus-circle text-xl cursor-pointer'"
            ></icon-components>
          </div>
          <div>
            <icon-components
              :class="'bi bi-chat-left-text-fill text-xl cursor-pointer'"
            ></icon-components>
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
              <li><a>Create a room</a></li>
              <li><a>Profile</a></li>
              <li><a>Archived</a></li>
              <li><a>Starred</a></li>
              <li><a>Setting</a></li>
              <li><a>Log out</a></li>
            </ul>
          </div>
        </main>
      </aside>
      <!-- Sidebar Input -->
      <aside class="bg-base-200">
        <main>
          <div>
            <icon-components :class="'bi bi-search cursor-pointer'"></icon-components>
          </div>
          <div>
            <input type="text" placeholder="Search or start new chat" />
          </div>
        </main>
      </aside>
      <!-- Sidebar Messages -->
      <aside class="bg-base-300">
        <article v-for="(inbox, idx) in useChats.inbox_message" :key="(inbox, idx)">
          <router-link :to="`/chat/${inbox.userId}`">
            <div>
              <img
                :src="inbox.userImg"
                alt="User-Profile"
                class="w-12 h-12 rounded-full"
              />
              <div>
                <h3 class="text-lg">{{ inbox.userName }}</h3>
                <p class="text-xs">
                  {{
                    inbox.lastMessage.length > 45
                      ? inbox.lastMessage.substring(0, 40) + "..."
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
      </aside>
    </section>
    <section id="app-container" class="bg-base-100">
      <RouterView />
    </section>
  </div>
</template>
