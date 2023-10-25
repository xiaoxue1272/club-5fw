import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routers: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        component: () => import("../../components/Home.vue"),
        name: "club home",
    },
    {
        path: "/live",
        component: () =>　import("../../components/Live.vue"),
        name: "club live",
        redirect:"/live/home",
        children: [
            {
                path: "home",
                component: () =>　import("../../components/live/Home.vue"),
                name: "live home",
            },
            {
                path: "control",
                component: () =>　import("../../components/live/Control.vue"),
                name: "live control",
            },
            {
                path: "room",
                component: () =>　import("../../components/live/Room.vue"),
                name: "live room",
            }
        ]
    },
]

export const appRouter = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
