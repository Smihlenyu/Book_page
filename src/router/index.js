import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../pages/cart.vue'),
      meta: {
        layout: 'default'
      }
    },
  ],
})

export default router
