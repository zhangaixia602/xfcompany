import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LearningCenter from '@/views/LearningCenter.vue'
const router = createRouter({
  mode:'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      id:'home',
      name: '首页',
      component: HomeView
    },
    {
      path: '/learningCenter',
      id:'learningCenter',
      name: '学习中心',
      component:LearningCenter
    },
    {
      path: '/practicalSite',
      id:'practicalSite',
      name: '实操场地',
      component: () => import('../views/PracticalSite.vue')
    },
    {
      path: '/queryCertificate',
      id:'queryCertificate',
      name: '证书查询',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QueryCertificate.vue')
    },
    {
      path: '/404',
      id:'404',
      name: '404',
      component: () => import('@/views/404.vue')
    }
  ]
})
export default router
