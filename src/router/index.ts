import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Maintenance from '../views/Maintenancepage.vue';

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
        name: 'Maintenance',
        component: Maintenance,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
