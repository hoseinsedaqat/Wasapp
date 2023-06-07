// imports
import { vue_toast_notification } from '@/constants/vueToastNotification';

import IconComponents from '@/components/IconComponents.vue';

import 'bootstrap-icons/font/bootstrap-icons.css';

import "vue-toastification/dist/index.css";

import Toast from "vue-toastification";

import { createPinia } from 'pinia';

import './assets/styles/main.css';

import { createApp } from 'vue';

import './assets/tailwind.css';

import router from './router';

import App from './App.vue';

import 'animate.css';
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
