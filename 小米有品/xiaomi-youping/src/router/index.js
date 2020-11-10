import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Classify from '@/views/classify.vue'
import Self from '@/views/self.vue'
import Cart from '@/views/cart.vue'
import Address from '@/views/address/address.vue'
import AddressEdit from '@/views/address/address-edit.vue'
import Collection from '@/views/collection.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'

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
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router