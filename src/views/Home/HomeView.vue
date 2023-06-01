<script setup lang="ts"></script>

<template>
  <div id="layout">
    <section id="home-container">
      <!-- Sidebar Header -->
      <aside class="bg-base-300">
        <main>
          <img
            src="@/assets/images/Hosein_Sedaqat.jpg"
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
        <article v-for="(x,idx) in 15" :key="(x,idx)">
          <div>
            <img
              src="@/assets/images/Hosein_Sedaqat.jpg"
              alt="User-Profile"
              class="w-12 h-12 rounded-full"
            />
            <div>
              <h3 class="text-lg">This Hosein 🤞🍕🍍</h3>
              <p class="text-xs">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div>
            <p class="text-xs">9:21</p>
          </div>
        </article>
      </aside>
    </section>
    <section id="app-container" class="bg-base-300">
        <RouterView />
    </section>
  </div>
</template>
