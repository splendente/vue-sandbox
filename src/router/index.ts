import { createRouter, createWebHistory } from 'vue-router'
import WatchersView from '../views/watchers-view.vue'
import FormInputView from '../views/form-input-view.vue'

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
    },
    {
      path: '/form-input',
      name: 'form-input',
      component: FormInputView
    }
  ]
})

export default router
