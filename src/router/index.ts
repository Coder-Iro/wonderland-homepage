import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import Home from "../pages/Home.vue"
import Worldmap from "../pages/Worldmap.vue"
import Discord from "../pages/Discord.vue"
import Command from "../pages/Command.vue"

const routes: RouteRecordRaw[] = [
    {
        name: "Home",
        alias: "/",
        component: Home,
        path: "/home"
    },
    {
        name: "Command",
        component: Command,
        path: "/command"
    },
    {
        name: "Discord",
        component: Discord,
        path: "/discord"
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
