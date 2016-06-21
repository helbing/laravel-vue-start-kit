import Home from './containers/Home.vue';
import Auth from './containers/Auth.vue';
import notFound from './containers/404.vue';
import Welcome from './components/Welcome.vue';
import AboutMe from './components/AboutMe.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';

export default router => {
  router.map({
    '/home': {
      name: 'home',
      component: resolve => resolve(Home),
      subRoutes: {
        'welcome': {
          name: 'welcome',
          component: resolve => resolve(Welcome),
        },
        'about': {
          name: 'about',
          component: resolve => resolve(AboutMe),
        },
      },
    },
    '/auth': {
      name: 'auth',
      component: resolve => resolve(Auth),
      subRoutes: {
        'login': {
          name: 'login',
          component: resolve => resolve(Login),
        },
        'register': {
          name: 'register',
          component: resolve => resolve(Register),
        },
        'profile': {
          name: 'profile',
          component: resolve => resolve(Profile),
        },
      },
    },
    '/dog': {

    },
    '*': {
      component: resolve => resolve(notFound),
    },
  });

  router.alias({
    '': '/home',
    '/home': '/home/welcome',
    '/auth': '/auth/login',
  });

  router.beforeEach(function (transition) {
    let token = localStorage.getItem('jwt-token');
    transition.next();
  });
};
