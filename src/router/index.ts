import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import Home from "../pages/Home.vue"
import Member from "../pages/Member.vue"
import Rules from "../pages/Rules.vue"
import Command from "../pages/Commands.vue"
import Discord from "../pages/Discord.vue"
import Worldmap from "../pages/Worldmap.vue"


const routes: RouteRecordRaw[] = [
    {
        name: "Home",
        alias: "/",
        component: Home,
        path: "/home"
    },
    {
        name: "Member",
        component: Member,
        path: "/member"
    },
    {
        name: "Rules",
        component: Rules,
        path: "/rules"
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
