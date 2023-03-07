import { createApp } from 'vue'
import './style.css'
import App from './app/App.vue'
import 'vfonts/Lato.css'
import {appRouter}  from "./common/appRouter";

// let routerApp = createApp()

let app = createApp(App).use(appRouter);
app.mount('#app')
app.config.errorHandler= (err, instance, info) => {

}
