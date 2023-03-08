import { createApp } from 'vue'
import './style.css'
import App from './app/App.vue'
import Modal from './app/Modal.vue'
import 'vfonts/Lato.css'
import {appRouter}  from "./common/appRouter.js";

let app = createApp(App)
.component('Modal', Modal)
.use(appRouter);
app.mount('#app')
