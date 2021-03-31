import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import MaintenancePage from '../views/MaintenancePage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/maintenance',
        name: 'MaintenancePage',
        component: MaintenancePage,
    },
    {
        path: '*',
        name: 'fallback',
        redirect: { name: 'Home' },
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
