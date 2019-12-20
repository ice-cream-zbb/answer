import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeX from '../views/HomeX.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 路由级别代码拆分
    // 这将为此路由生成单独的块（关于[hash].js）
    // 当路线被访问时延迟加载的。
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/HomeX',
    name: 'HomeX',
    component: HomeX
  }
]
const router = new VueRouter({
  routes
})
export default router
