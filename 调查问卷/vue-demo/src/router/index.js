import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/main'
import Content from '@/views/content'
import Account from '@/views/account'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/content',
    name: 'content',
    component: Content
  },{
    path: '/account',
    name: 'account',
    component: Account
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
