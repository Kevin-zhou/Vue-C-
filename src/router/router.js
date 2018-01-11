import Vue from 'vue'
import Router from 'vue-router'

const routerConfig = require("../config/app_config.js").router;
const Home = resolve => require(['../views/home.vue'], resolve);
const Login = resolve => require(['../views/login.vue'], resolve);
const ShelfStocktake = resolve => require(['../views/shelfStocktake.vue'], resolve);
const ShelfReplenishment = resolve => require(['../views/shelfReplenishment.vue'], resolve);
const ShelfInfo = resolve => require(['../views/shelf_info.vue'], resolve);

Vue.use(Router)
// 配置路由
const router = new Router({
    base: routerConfig.base,
    mode: routerConfig.mode,
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: Home,
            props: { title: '腾楷货架管理端' }
        },
        {
            path: '/login',
            component: Login,
            props: { title: '登录' }
        },
        {
            path: '/shelfStocktake',
            component: ShelfStocktake,
            props: { title: '盘点' }
        },
        {
            path: '/shelfReplenishment',
            component: ShelfReplenishment,
            props: { title: '补货' }
        },
        {
            path: '/shelf/:id',
            component: ShelfInfo,
            props: { title: '补货' }
        }

    ]
});


module.exports = router;

router.afterEach(() => {
    const loader$ = document.querySelector(".pub-loader");
    loader$.style.display = "none";
})
// router.beforeEach((to,form,next) => {
//     __utils.ajax("login").then(res=>{
//         if(res.success) next();
//         else next("/login")
//     })
// })


Vue.prototype.$setgoindex = function () {
    if (window.history.length <= 2) {
        if (location.href.indexOf('?') === -1) {
            window.location.href = location.href + '?goindex=true'
        } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
            window.location.href = location.href + '&goindex=true'
        }
    }
}