<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a href="#" v-link="{path: '/'}" class="navbar-brand">{{ logo }}</a>
      </div>
  
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#" v-link="{name: 'home', 'activeClass': 'active'}">Home</a></li>
          <li><a href="#" v-link="{name: 'home', 'activeClass': 'active'}" v-if="getAuth">Dog</a></li>
        </ul>

        <div class="nav navbar-nav navbar-right">
          <ul class="nav navbar-nav" v-if="!getAuth">
            <li><a href="#" v-link="{name:'login', 'activeClass': 'active'}">Login</a></li>
            <li><a href="#" v-link="{name:'register', 'activeClass': 'active'}">Register</a></li>
          </ul>
          <ul class="nav navbar-nav" v-else>
            <li class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle" @click="toggle">
                {{ getName }} <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" :class="{ show: show }">
                <li class="dropdown-header">Settings</li>
                <li>
                  <a v-link="{ path: '/auth/profile', 'activeClass': 'active' }">
                    <i class="glyphicon glyphicon-user"></i>
                    &nbsp;Your profile
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="javascript:void(0);" @click="logout">
                    <i class="glyphicon glyphicon-log-out"></i>
                    &nbsp;Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { getAuth, getName } from '../vuex/getters.js';
  import { logout } from '../vuex/actions.js';
  import store from '../vuex/store.js';

  export default {
    data() {
      return {
        'logo': 'Laravel & Vue.js',
        'show': false,
      };
    },
    methods: {
      toggle: function() {
        this.show = !this.show;
      },
      logout: function() {
        logout(store);
        this.$route.router.go({ name: 'login' });
      },
    },
    vuex: {
      getters: {
        getAuth, getName,
      },
    },
  };
</script>

<style lang="scss">
  .navbar {
    
    .navbar-header {
      font-weight: 300;

      .navbar-brand {
        font-size: 24px;
        line-height: 34px;

        height: auto;
      }

    }

    .navbar-nav {
      
      li {

        a {
          padding-top: 22px;
          padding-bottom: 22px;
        }

        a.active {
          text-decoration: underline;
        }

      }

    }
    
    .dropdown-menu {

      li {
        
        a {
          padding-top: 5px;
          padding-bottom: 5px;
        }

      }

    }

  }

  .show {
    display: inline;
  }
</style>