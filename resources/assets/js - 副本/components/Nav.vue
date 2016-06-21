<template>
  <div class="panel panel-default my-panel">
    <div class="panel-heading">NAV</div>
    <div class="panel-body">
      <ul class="list-group" v-if="is('home')">
        <li class="list-group-item">
          <a href="#" v-link="{name:'welcome', 'activeClass': 'active'}">
            <span class="glyphicon glyphicon-menu-hamburger"></span>
            &emsp;Welcome
          </a>
        </li>
        <li class="list-group-item">
          <a href="#" v-link="{name:'about', 'activeClass': 'active'}">
            <span class="glyphicon glyphicon-eye-open"></span>
            &emsp;About me
          </a>
        </li>
      </ul>

      <ul class="list-group" v-if="is('auth')">
        <li class="list-group-item">
          <a href="#" v-link="{name:'login', 'activeClass': 'active'}">
            <span class="glyphicon glyphicon-log-in"></span>
            &emsp;Login
          </a>
        </li>
        <li class="list-group-item">
          <a href="#" v-link="{name:'register', 'activeClass': 'active'}">
            <span class="glyphicon glyphicon-send"></span>
            &emsp;Register
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['nav'],
    methods: {
      is(nav) {
        return this.nav === nav;
      },
    },
  };
</script>

<style lang="scss">
  .my-panel {
    border-radius: 0;
  
    .panel-body {
      padding: 0;
    
      .list-group{
        margin-bottom: 0;

        .list-group-item {
          a {
            color: #000000;
          }

          a:hover, a:visited, a:link {
            text-decoration: none;
          }

          a.active {
            
            span {
              color: green;
            }

          }
        }

        .list-group-item:first-child {
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }

        .list-group-item:last-child {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }

      }
    
    }
  }
</style>