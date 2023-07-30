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
