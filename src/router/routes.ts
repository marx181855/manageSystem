import { RouteRecordRaw } from 'vue-router';
import createMenuRouteRecord from '@/utils/sideBarMenu/createMenuRouteRecord';
declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    roles: string[];
  }
}

const sideBarRoute = createMenuRouteRecord();

const routes: RouteRecordRaw[] = [
  sideBarRoute[0],
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index/index.vue'),
    children: sideBarRoute[1],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/auth/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/auth/register.vue'),
  }
];

export default routes;
