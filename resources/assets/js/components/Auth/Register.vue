<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <div v-for="error in getValidateError">
          <alert type="danger" :message="error"></alert>
        </div>
        <form class="form-horizontal col-md-10 col-md-offset-1" @submit.stop.prevent="register(this, name, email, password, password_confirmation)">
          <div class="form-group">
            <span class="col-md-4 control-label">Name</span>
            <div class="col-md-8">
              <input type="text" class="form-control" placeholder="Input your Name" v-model="name">
            </div>
          </div>
          <div class="form-group">
            <span class="col-md-4 control-label">Email</span>
            <div class="col-md-8">
              <input type="text" class="form-control" placeholder="Input your Email" v-model="email">
            </div>
          </div>
          <div class="form-group">
            <span class="col-md-4 control-label">Passowrd</span>
            <div class="col-md-8">
              <input type="password" class="form-control" placeholder="Input your Passowrd" v-model="password">
            </div>
          </div>
          <div class="form-group">
            <span class="col-md-4 control-label">Confirm Password</span>
            <div class="col-md-8">
              <input type="password" class="form-control" placeholder="Confirm your Passowrd" v-model="password_confirmation">
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-9 col-md-offset-4">
              <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-send"></span>&emsp;Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Alert from '../Alert.vue';
  import { register } from '../../vuex/actions.js';
  import { getValidateError } from '../../vuex/getters.js';
  
  export default {
    data() {
      return {
        title: 'Register',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      };
    },
    components: {
      Alert,
    },
    vuex: {
      actions: {
        register,
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
</style>