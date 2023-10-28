import { createApp } from 'vue'
import './style.css'
import App from './app/App.vue'
import 'vfonts/Lato.css'
import {router}  from "./ts/router";

let app = createApp(App).use(router);
app.mount('#app')
