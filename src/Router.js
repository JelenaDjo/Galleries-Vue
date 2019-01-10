import Vue from 'vue'

import VueRouter from 'vue-router'
import AllGalleries from './components/AllGalleries'
import Login from './components/Login'
import Register from './components/Register'


Vue.use(VueRouter);

const routes = [
    {path: '/galleries', component: AllGalleries, name: 'galleries' },
    {path: '/login', component: Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'}
//    
];

const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router
