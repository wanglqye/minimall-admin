import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        component: () => import('../components/HelloWorld.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;
