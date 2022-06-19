import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue';
import HomePage from '../views/HomePage.vue';
import Settings from '../views/Settings.vue';
import History from '../views/History.vue';
import Notifications from '../views/Notifications.vue';
import Account from '../views/Account.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
    beforeEnter: authGuard,
  },
  {
    path: '/history',
    name: 'history',
    component: History,
    beforeEnter: authGuard,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
    beforeEnter: authGuard,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
