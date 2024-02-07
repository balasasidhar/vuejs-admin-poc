import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const isAuthenticated = true

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/DashboardView.vue')
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import('../views/OrderView.vue')
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: '/categories',
          name: 'categories',
          component: () => import('../views/CategoriesView.vue')
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('../views/UserView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to) => {
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  if (isAuthenticated && to.name === 'login') {
    return { name: 'home' }
  }
})

export default router
