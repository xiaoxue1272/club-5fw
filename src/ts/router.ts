import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import { createDiscreteApi } from 'naive-ui'
import {closeSpin, showSpin} from "./common/basic";
const { loadingBar } = createDiscreteApi(['loadingBar'])

const routers: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/404",
        component: () => import("../app/404.vue"),
        name: "404",
    },
    {
        path: "/403",
        component: () => import("../app/403.vue"),
        name: "403",
    },
    {
        path: "/500",
        component: () => import("../app/500.vue"),
        name: "500",
    },
    {
        path: "/home",
        component: () => import("../components/Home.vue"),
        name: "home",
    },
    {
        path: "/live",
        component: () =>　import("../components/Live.vue"),
        name: "live",
        redirect:"/live/home",
        children: [
            {
                path: "home",
                component: () =>　import("../components/live/Home.vue"),
                name: "liveHome",
            },
            {
                path: "control",
                component: () => import("../components/live/Control.vue"),
                name: "liveControl",
            },
            {
                path: "room",
                component: () =>　import("../components/live/Room.vue"),
                name: "liveRoom",
            }
        ]
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

router.beforeEach( async (to, _from) => {
    loadingBar.start()
    showSpin()
    if (!router.hasRoute((<string>to.name))) {
        await router.push("/404")
    }
})

router.onError(async (error) => {
    console.log(error)
    await router.push("/500")
})

router.afterEach( async () => {
    closeSpin()
    loadingBar.finish()
})
