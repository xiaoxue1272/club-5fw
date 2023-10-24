import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routers: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        component: () => import("../../components/Home.vue"),
        name: "Club Home",
    },
    {
        path: "/live",
        component: () =>　import("../../components/LiveHome.vue"),
        name: "Club Live",
    },
]

export const appRouter = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
