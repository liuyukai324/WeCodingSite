import {createRouter,createWebHashHistory} from "vue-router"
// 组件
import Home from "@/pages/Home.vue"
import Code from "@/pages/Code.vue"
import AddProject from "@/pages/AddProject.vue"

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
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
        {
            name: "addProject",
            path: "/addProject",
            component: AddProject,
        }
    ]
})
// 暴露
export default router