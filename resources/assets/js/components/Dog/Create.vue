<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <div v-for="error in getValidateError">
        <alert type="danger" :message="error"></alert>
      </div>
      <form class="form-horizontal col-md-10 col-md-offset-1" @submit.stop.prevent="createDog(this, name, age)">
        <div class="form-group">
          <span class="col-md-4 control-label">Dog Name</span>
          <div class="col-md-8">
            <input type="text" class="form-control" placeholder="Dog Nam" v-model="name">
          </div>
        </div>
        <div class="form-group">
          <span class="col-md-4 control-label">Dog Age</span>
          <div class="col-md-8">
            <input type="text" class="form-control" placeholder="Dog Age" v-model="age">
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-9 col-md-offset-4">
            <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-certificate"></span>&emsp;Create</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Alert from '../Alert.vue';
  import { createDog } from '../../vuex/actions.js';
  import { getValidateError } from '../../vuex/getters.js';

  export default {
    data() {
      return {
        title: 'Create Dog',
        name: '',
        age: '',
      };
    },
    components: {
      Alert,
    },
    vuex: {
      actions: {
        createDog,
      },
      getters: {
        getValidateError,
      },
    },
  };
</script>