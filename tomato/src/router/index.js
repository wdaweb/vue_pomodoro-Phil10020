// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '首頁|茄子鐘'
    }
  },
  {
    path: '/list',
    component: () => import('@/views/ListView.vue'),
    meta: {
      title: '事項|茄子鐘'
    }
  },
  {
    path: '/settings',
    component: () => import('@/views/SettingView.vue'),
    meta: {
      title: '設定|茄子鐘'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
