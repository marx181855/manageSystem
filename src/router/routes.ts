import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index/Index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/index/Home.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/index/About.vue'),
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/auth/Register.vue'),
  }
];

export default routes;
