import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      redirect: '/home' 
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    // Wildcard route to catch all unmatched routes and redirect to home
    {
      path: '/:catchAll(.*)',
      redirect: '/home'
    }
  ]
})

export default router
