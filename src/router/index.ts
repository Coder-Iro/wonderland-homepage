import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import Home from "../components/Home.vue"

const routes: RouteRecordRaw[] = [
    {
        name: "Root",
        path: "/",
        redirect: {name: "Home"}
    },
    {
        name: "Home",
        component: Home,
        path: "/home"
    }
]

const router = createRouter(<RouterOptions>{
        history: createWebHistory(),
        routes,
    }
)

export default router
