import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vfonts/Lato.css'
import {appRouter}  from "./common/appRouter.js";

// let routerApp = createApp()

let app = createApp(App).use(appRouter);
app.mount('#app')
app.config.errorHandler= (err, instance, info) => {

}
