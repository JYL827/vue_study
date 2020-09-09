import Vue from 'vue'
import VueRouter from 'vue-router'

const search = () => import('@/views/search')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/search',
      name: 'search',
      component: search
    }
]

const router = new VueRouter({
  linkActiveClass: 'active', // router-link点击后的类名
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
