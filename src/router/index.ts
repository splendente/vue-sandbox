import { createRouter, createWebHistory } from 'vue-router'
import WatchersView from '../views/watchers-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/watchers',
      name: 'home',
      component: WatchersView
    },
    {
      path: '/template-refs',
      name: 'template-refs',
      component: () => import('../views/template-refs.vue')
    }
  ]
})

export default router
