<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <div v-for="error in getValidateError">
        <alert type="danger" :message="error"></alert>
      </div>
      <form class="form-horizontal col-md-10 col-md-offset-1" @submit.stop.prevent="login(this, email, password)">
        <div class="form-group">
          <span class="col-md-4 control-label">Email</span>
          <div class="col-md-8">
            <input type="email" class="form-control" placeholder="Email" v-model="email">
          </div>
        </div>
        <div class="form-group">
          <span class="col-md-4 control-label">Passowrd</span>
          <div class="col-md-8">
            <input type="password" class="form-control" placeholder="Passowrd" v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-9 col-md-offset-4">
            <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-log-in"></span>&emsp;Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Alert from './Alert.vue';
  import { login } from '../vuex/actions.js';
  import { getValidateError } from '../vuex/getters.js';

  export default {
    data() {
      return {
        title: 'Login',
        email: '',
        password: '',
      };
    },
    components: {
      Alert,
    },
    vuex: {
      actions: {
        login,
      },
      getters: {
        getValidateError,
      },
    },
  };
</script>

<style>
  .panel {
    border-radius: 0;
  }

  .control-label {
    font-size: 16px;
  } 

  .form-control {
    border-radius: 0;
  }
</style>