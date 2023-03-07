import {createRouter, createWebHashHistory} from "vue-router";



const routers = [
    {
        path: "/",
        component: () =>　import("../components/Home.vue"),
        name: "Club Home",
        alias: [
            "/home",
            "/main",
        ]
    },
]

export const appRouter = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
