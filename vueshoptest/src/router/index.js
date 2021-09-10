import Vue from 'vue'
import VueRouter from 'vue-router'

const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Home = () => import('../views/home/Home.vue')
const Profile = () => import('../views/profile/Profile.vue')
Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    redirect:'/home'
  },
  {
    name : 'Home',
    path : '/home',
    component : Home
  },
  {
    name : 'Category',
    path : '/category',
    component : Category
  },
  {
    name : 'Cart',
    path : '/cart',
    component : Cart
  },
  {
    name : 'Profile',
    path : '/profile',
    component : Profile
  },
  {
    name : 'Detail',
    path : '/detail',
    component : Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
