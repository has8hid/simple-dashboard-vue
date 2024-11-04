import { createRouter, createWebHistory } from 'vue-router'
import Dashborad from '@/views/DashBoradSec.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashbord',
      component: Dashborad,
    },
  ],
})

export default router
