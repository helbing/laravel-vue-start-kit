<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ title }}</div>
      <table class="table" style="text-align: center;">
        <thead>
          <tr>
            <th style="text-align: center;">#</th>
            <th style="text-align: center;">NAME</th>
            <th style="text-align: center;">EMAIL</th>
          </tr>            
        </thead>
        <tbody>
          <tr>
            <td>{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ email }}</td>
          </tr>            
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { logout } from '../vuex/actions.js';
  import store from '../vuex/store.js';
  
  export default {
    data() {
      return {
        title: 'Your profile',
        id: '',
        name: '',
        email: '',
      };
    },
    ready() {
      let token = localStorage.getItem('jwt-token');
      this.$http.get('/api/me', { token }).then((response) => {
        this.id = response.data.user.id;
        this.name = response.data.user.name;
        this.email = response.data.user.email;
      }, (response) => {
        logout(store);
        this.$route.router.go({ name: 'login' });
      });
    },
  };
</script>

<style>
  .panel {
    border-radius: 0;
  }
</style>