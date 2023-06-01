import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import './assets/styles/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import IconComponents from '@/components/IconComponents.vue';
// app
const app = createApp(App);
// components
app.component('IconComponents',IconComponents);

// plugins
app.use(createPinia());
app.use(router);
// main app
app.mount('#app');
