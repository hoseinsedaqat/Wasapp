<script setup></script>

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
        <article v-for="x in 15" :key="x">
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero at inventore, tempore voluptate animi expedita nam praesentium. Quas adipisci repellendus dignissimos totam optio sit repellat expedita in distinctio ullam? Dicta vel quo error libero sapiente, dolores ab quas veniam amet, sit dolor. Ad pariatur voluptas ab unde rem, odit accusamus similique odio at minus neque voluptates id, deserunt voluptatibus fuga eos. Nesciunt voluptatem aspernatur, aperiam itaque inventore aut non illum harum minus ab esse enim dolorum. Quasi totam molestias sit doloribus eum cum explicabo. Voluptate, necessitatibus dolor. Totam, perferendis expedita? Rem perferendis culpa quasi hic repellat at. Deserunt delectus consequuntur quia consectetur modi. Nostrum sint velit praesentium. Nulla voluptatum repudiandae placeat minus sunt maiores doloremque earum ad molestiae, temporibus quo provident non exercitationem nisi corporis, numquam, nemo ipsa eius officia accusantium perferendis tempora. Exercitationem laboriosam, iste eos voluptate officiis voluptas ratione, possimus repellat animi, voluptates laudantium accusamus vero ullam. Nemo ipsam sunt enim, esse, voluptate veniam qui ullam consequatur non quidem error. Odit dolor voluptatibus aliquid nulla esse reprehenderit fuga sunt repellat, unde laudantium. Impedit natus molestias incidunt, nihil ab sapiente soluta quo molestiae aliquid eos? Ipsum dolorem tenetur sequi voluptate, optio, error tempore fugiat distinctio labore perferendis aspernatur nam culpa ratione nihil rerum aperiam, assumenda adipisci voluptates ipsa magni. Odio architecto dolorem natus nam? Quas earum excepturi qui iusto temporibus molestias facere dignissimos eveniet voluptatem repudiandae, laborum itaque assumenda ex cum voluptates corporis eos. Et iste obcaecati eaque omnis dolorem sed consequatur ratione alias ab mollitia! Culpa cupiditate cum numquam esse vel fugiat deleniti iusto! Cum beatae, voluptate doloribus reiciendis ab autem, numquam expedita tempora incidunt ex ipsa magni. Ut repellat aperiam deleniti, accusamus necessitatibus similique aut libero ipsam sapiente reiciendis facere tempora aspernatur earum aliquid doloribus perspiciatis molestiae ducimus incidunt officia quo optio ex esse recusandae blanditiis? Ipsa debitis doloribus molestiae dolorem. Ducimus tenetur fuga omnis enim impedit, saepe eaque atque, facilis, maiores doloremque consectetur! Soluta tenetur optio doloribus sint quisquam, in ducimus iusto voluptatem vero laborum. Nam ab enim unde minima accusantium sint modi voluptatibus, doloribus quas officia id pariatur ipsum esse quisquam asperiores ducimus amet natus fugiat corporis magnam? Molestias eligendi labore, earum accusamus, doloribus, iure exercitationem corporis sit corrupti ullam atque ut. Voluptatem commodi eos similique beatae deserunt necessitatibus accusamus nobis delectus tenetur explicabo! Perferendis, libero rem. Tempora impedit dolorem nobis illum temporibus asperiores aliquam repellendus quo nulla fugit adipisci rerum voluptatibus, accusamus quibusdam aut atque odio eaque nam debitis? Nisi modi distinctio minima natus perferendis neque laudantium iste quibusdam, iure cumque corporis error aliquid sequi magnam libero, suscipit placeat ullam amet beatae consequuntur excepturi necessitatibus assumenda ea! Reiciendis cumque repellendus dolores ea dolorem obcaecati omnis, sint assumenda fuga placeat quisquam ullam illum officiis laudantium.</p>
    </section>
  </div>
</template>
