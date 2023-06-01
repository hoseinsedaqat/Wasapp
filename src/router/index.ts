import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoaderView',
      component: async () => await import('@/views/Loader/LoaderView.vue')
    },
    {
      path: '/home',
      name: 'HomeView',
      component: async () => await import('@/views/Home/HomeView.vue')
    }
  ]
})

export default router;
