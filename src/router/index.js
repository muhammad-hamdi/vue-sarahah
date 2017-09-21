import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/views/main/Main.vue';
import Login from '../components/views/auth/Login.vue';
import Register from '../components/views/auth/Register.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Main,
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }
    ]
})