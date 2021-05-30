import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/front/FrontStage'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/front/Home')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/front/Login')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/components/back/BackStage'),
    children: [
      {
        path: 'products',
        name: 'BackProducts',
        component: () => import('@/views/back/BackProducts'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
