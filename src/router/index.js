import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/views/main/Main.vue';
import Login from '../components/views/auth/Login.vue';
import Register from '../components/views/auth/Register.vue';
import Send from '../components/views/main/Send.vue';
import Messages from '../components/views/main/Messages.vue';

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
        },
        {
            path: '/send/:username',
            component: Send,
        },
        {
            path: '/user/:username',
            component: Messages
        }
    ]
})