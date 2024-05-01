import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
const Currency = () => import('currency_converter/Currency');
const Vista = () => import('vista_dictionary/Vista');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/converter',
    component: Currency,
  },
  {
    path: '/dictionary',
    component: Vista,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
