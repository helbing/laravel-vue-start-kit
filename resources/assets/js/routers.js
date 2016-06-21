import Home from './containers/Home.vue';
import Auth from './containers/Auth.vue';
import Dog from './containers/Dog.vue';
import notFound from './containers/404.vue';
import Welcome from './components/Home/Welcome.vue';
import AboutMe from './components/Home/AboutMe.vue';
import Login from './components/Auth/Login.vue';
import Register from './components/Auth/Register.vue';
import Profile from './components/Auth/Profile.vue';
import Index from './components/Dog/Index.vue';
import Edit from './components/Dog/Edit.vue';
import Create from './components/Dog/Create.vue';

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
          auth: true,
          component: resolve => resolve(Profile),
        },
      },
    },
    '/dog': {
      name: 'dog',
      auth: true,
      component: resolve => resolve(Dog),
      subRoutes: {
        'index': {
          name: 'index',
          component: resolve => resolve(Index),
        },
        'create': {
          name: 'create',
          component: resolve => resolve(Create),
        },
        'edit/:id': {
          name: 'edit',
          component: resolve => resolve(Edit),
        },
      },
    },
    '*': {
      component: resolve => resolve(notFound),
    },
  });

  router.alias({
    '': '/home',
    '/home': '/home/welcome',
    '/auth': '/auth/login',
    '/dog': '/dog/index',
  });

  router.beforeEach(function (transition) {
    console.log(transition.to.auth);
    let token = localStorage.getItem('jwt-token');
    transition.next();
  });
};
