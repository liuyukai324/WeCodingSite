import {createRouter,createWebHistory} from "vue-router"
// 组件
import Code from "../pages/Code.vue"
import Home from "../pages/Code.vue"

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            name: "Home",
            path: "/home",
            component: Home
        },
        {
            name: "Code",
            path: "/code",
            component: Code
        }
    ]
})

// 暴露
export default router