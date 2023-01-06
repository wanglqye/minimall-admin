import router from './router'

// 路由全局前置守卫
router.beforeEach((to,from,next) => {
    console.log('前置守卫',to,from)
    next();
})

// 路由全局后置守卫
router.afterEach((to, from, next) => {
    console.log('路由全局后置守卫', to, from);
    // next()
})


export default router
