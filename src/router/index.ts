import {createRouter,createWebHistory} from "vue-router"
// 组件
import Home from "@/pages/Home.vue"
import Code from "@/pages/Code.vue"

// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            name: "home",
            path: "/home",
            component: Home,
        },
        {
            name: "code",
            path: "/code",
            component: Code,
        },
    ]
})
// 暴露
export default router