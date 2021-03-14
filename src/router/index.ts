import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import Home from "../pages/Home.vue"
import Worldmap from "../pages/Worldmap.vue"

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
    },
    {
        name: "Worldmap",
        component: Worldmap,
        path: "/worldmap"
    }
]

const router = createRouter(<RouterOptions>{
        history: createWebHistory(),
        routes,
    }
)

export default router
