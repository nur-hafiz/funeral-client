import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about/Page.vue')
    },
    {
      path: '/packages',
      name: 'packages',
      component: () => import('../views/packages/Page.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/Page.vue')
    }
  ]
})

export default router
