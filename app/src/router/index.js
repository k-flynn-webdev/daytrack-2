import Vue from 'vue'
import VueRouter from 'vue-router'
// import userRoutes from './user'
// import itemRoutes from './items'
import Home from '../views/Home.vue'

// import isAdminAPI from '@/services/isAdmin';
// import { ALL } from '../constants'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ '../views/Register')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login')
    },
    // {
    //   path: '/user',
    //   name: 'user',
    //   component: () => import(/* webpackChunkName: "user" */ '../views/User')
    // },
    {
      path: '/track',
      name: 'track',
      component: () => import(/* webpackChunkName: "track" */ '../views/Create')
    },
  // {
  //   path: ALL.HOME.route.path,
  //   name: ALL.HOME.route.name,
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: ALL.ADMIN.route.path,
  //   name: ALL.ADMIN.route.name,
  //   beforeEnter: (to, from, next) => {
  //     const success = () => next()
  //     const fail = () => next ({ name: ALL.HOME.route.name })
  //
  //     return isAdminAPI(success, fail)
  //   },
  //   component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  // },
  // ...userRoutes,
  // ...itemRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
