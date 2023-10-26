import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routers: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        component: () => import("../../components/Home.vue"),
        name: "home",
    },
    {
        path: "/live",
        component: () =>　import("../../components/Live.vue"),
        name: "live",
        redirect:"/live/home",
        children: [
            {
                path: "home",
                component: () =>　import("../../components/live/Home.vue"),
                name: "liveHome",
            },
            {
                path: "control",
                component: () =>　import("../../components/live/Control.vue"),
                name: "liveControl",
            },
            {
                path: "room",
                component: () =>　import("../../components/live/Room.vue"),
                name: "liveRoom",
            }
        ]
    },
]

export const appRouter = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
