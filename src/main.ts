import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import './assets/styles/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import IconComponents from '@/components/IconComponents.vue';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { vue_toast_notification } from '@/constants/vueToastNotification';
// app
const app = createApp(App);
// components
app.component('IconComponents',IconComponents);

// plugins
app.use(Toast, vue_toast_notification);
app.use(createPinia());
app.use(router);
// main app
app.mount('#app');
