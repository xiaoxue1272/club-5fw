import { createApp } from 'vue'
import './style.css'
import App from './app/App.vue'
import 'vfonts/Lato.css'
import {appRouter}  from "./common/appRouter";

let app = createApp(App)
.use(appRouter);
app.mount('#app')
