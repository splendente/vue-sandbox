import { createRouter, createWebHistory } from 'vue-router'
import WatchersView from '../views/watchers-view.vue'
import FormInputView from '../views/form-input-view.vue'
import KeepAliveView from '../views/keep-alive-view.vue'

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
    },
    {
      path: '/keep-alive',
      name: 'keep-alive',
      component: KeepAliveView
    }
  ]
})

export default router
