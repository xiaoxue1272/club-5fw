import {createRouter, createWebHashHistory} from "vue-router";



const routers = [
    {
        path: "/home",
        component: () =>　import("../components/Home.vue"),
        name: "Club Home",
        alias: [
            "/main",
        ]
    },
]

export const appRouter = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
