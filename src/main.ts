import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus from 'element-plus'
import { AddLocation } from '@element-plus/icons';
import 'element-plus/dist/index.css'
import "normalize.css/normalize.css";

import "@/assets/style/global/global.scss";

const app = createApp(App);

app.use(store).use(router).use(ElementPlus).mount('#app');

app.component('AddLocation', AddLocation)