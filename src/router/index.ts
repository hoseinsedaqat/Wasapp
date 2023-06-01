import { createRouter, createWebHistory } from 'vue-router';
import { redirectRoute } from '@/utils/redirectRoute';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      beforeEnter:redirectRoute,
      component: async () => await import('@/views/Home/HomeView.vue'),
    },
    {
      path: '/web/whatsapp',
      name: 'WebView',
      component: async () => await import('@/views/Web/WebView.vue')
    },
    {
      path: '/chat/:id',
      name: 'ChatView',
      component: async () => await import('@/views/Chat/ChatView.vue')
    },
  ]
})

export default router;
