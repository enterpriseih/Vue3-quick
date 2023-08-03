/*
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 10:24:07
 */
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'

const routes = [
  {
    path: '/',
    redirect:'/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
      },
      {
        path: '/ref',
        name: 'ref',
        component: () => import(/* webpackChunkName: "about" */ '../views/1.ref.vue')
      },
      {
        path: '/reactive',
        name: 'reactive',
        component: () => import(/* webpackChunkName: "about" */ '../views/2.reactive.vue')
      },
      {
        path: '/proxy',
        name: 'proxy',
        component: () => import(/* webpackChunkName: "about" */ '../views/3.proxy.vue')
      },
      {
        path: '/computed',
        name: 'computed',
        component: () => import(/* webpackChunkName: "about" */ '../views/4.computed.vue')
      },
      {
        path: '/watch',
        name: 'watch',
        component: () => import(/* webpackChunkName: "about" */ '../views/5.watch.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
