import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

import { createDiscreteApi } from 'naive-ui'
import {closeSpin, showSpin} from "./common/basic";
const { loadingBar } = createDiscreteApi(['loadingBar'])
const { notification } = createDiscreteApi(['notification'])

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

router.beforeEach( async (to) => {
    loadingBar.start()
    showSpin()
    if (!router.hasRoute((<string>to.name))) {
        await router.push({path: "/404"})
    }
})

router.afterEach( async (to, from, failure) => {
    closeSpin()
    if (failure != undefined && to.path !== from.path) {
        loadingBar.error();
        notification.warning({
            closable: true,
            keepAliveOnHover: true,
            content: failure.message,
            meta: "可能你家网太垃圾了,是不是还跟我犟嘴了?",
            duration: 2500,
        })
        console.log(failure.message)
        console.log(failure.stack)
        return
    }
    loadingBar.finish()
})
