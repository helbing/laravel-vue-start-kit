import Vue from 'vue';
import Router from 'vue-Router';
import Resource from 'vue-resource';
import App from './containers/App.vue';
import Routers from './routers.js';

/* register plugin */
Vue.use(Router);
Vue.use(Resource);

/* register router */
/* eslint-disable no-new */
const router = new Router();

/* http://router.vuejs.org/zh-cn/index.html */
Routers(router);

/* start app */
router.start(App, '#app');

