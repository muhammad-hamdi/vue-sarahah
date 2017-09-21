import axios from 'axios';
import config from './config';

const api = axios.create({
    baseURL: `${config.url}/api`,
    headers: {
        'x-access-token': localStorage.getItem('token') || '',
    },
})

window.api = api;