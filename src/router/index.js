import {createRouter, createWebHashHistory} from 'vue-router'
// 1. 创建路由规则
const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import("../views/login/Index.vue")
    },
    {
        path: '/',
        name: 'layout',
        component: () => import("../views/layout/Index.vue"),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import("../views/home/Index.vue")
            }, {
                path: '/qa',
                name: 'qa',
                component: () => import("../views/qa/Index.vue")
            }, {
                path: '/video',
                name: 'video',
                component: () => import("../views/video/Index.vue")
            }, {
                path: '/my',
                name: 'my',
                component: () => import("../views/my/Index.vue")
            },

        ]
    },
]
// 2. 创建路由实例
const router = createRouter({
    // createWebHistory
    history: createWebHashHistory(),
    routes,
})
export default router
// 3. 创建登录组件
// 4. 指定出口
