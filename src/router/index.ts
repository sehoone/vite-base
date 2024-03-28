import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import sample from '@/router/routes/sample';

const routes: RouteRecordRaw[] = [
  sample,
  // routerMembers,
  // routerPosts,
  {
    path: '/',
    redirect: '/sample/helloWorld',
    meta: {
      title: 'HomeMain'
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// 라우터 가드(router before/after) setup
// setupRouterGuard(router)

export default router;
