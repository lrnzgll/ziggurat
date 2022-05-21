import { createRouter, createWebHistory } from 'vue-router';
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
  },
  {
    path: '/history',
    name: 'history',
    component: History,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
