import { createApp } from 'vue'
import {store} from './store'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidMenu,IoSearchSharp,IoAddOutline } from "oh-vue-icons/icons";

addIcons(HiSolidMenu,IoSearchSharp,IoAddOutline);

import './assets/main.css'

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(router)
app.use(store)
app.mount('#app')
