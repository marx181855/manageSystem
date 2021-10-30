import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "normalize.css/normalize.css";

import "@/assets/style/global/global.scss"

createApp(App).use(store).use(router).use(ElementPlus).mount('#app');
