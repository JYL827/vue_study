import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Classify from '@/views/classify.vue'
import Self from '@/views/self.vue'
import Cart from '@/views/cart.vue'
import Address from '@/views/address/address.vue'
import AddressEdit from '@/views/address/address-edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/self',
    name: 'self',
    component: Self
  },
  {
    path: '/address',
    name: 'address',
    component: Address
  },
  {
    path: '/addressEdit',
    name: 'addressEdit',
    component: AddressEdit
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router