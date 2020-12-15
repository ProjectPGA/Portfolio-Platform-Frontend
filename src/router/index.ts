import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import CssOverview from '../views/CssOverview.vue';
import JavascriptOverview from '../views/JavascriptOverview.vue';

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
        path: '/css',
        name: 'Css',
        component: CssOverview,
    },
    {
        path: '/javascript',
        name: 'Javascript',
        component: JavascriptOverview,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
