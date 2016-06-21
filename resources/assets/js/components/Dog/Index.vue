<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <div v-if="message">
        <alert :message="message"></alert>
      </div>
      <table class="table" style="text-align: center;" v-else>
        <thead>
          <tr>
            <th style="text-align: center;">#</th>
            <th style="text-align: center;">NAME</th>
            <th style="text-align: center;">AGE</th>
            <th></th>
          </tr>            
        </thead>
        <tbody>
          <tr v-for="dog of dogs">
            <td>{{ dog.id }}</td>
            <td>{{ dog.name }}</td>
            <td>{{ dog.age }}</td>
            <td>
              <div class="btn-group">
                <a href="#" v-link="{name: 'edit', params: {id: dog.id}}">edit&nbsp;</button>
                <a href="javascript:void(0);" @click="deleteDog(this, dog.id)">&nbsp;delete</button>
              </div>
            </td>
          </tr>            
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Alert from '../Alert.vue';
  import { deleteDog } from '../../vuex/actions.js';

  export default {
    data() {
      return {
        title: 'Dog List',
        dogs: [],
        message: '',
      };
    },
    components: {
      Alert,
    },
    vuex: {
      actions: {
        deleteDog,
      },
    },
    ready() {
      let token = localStorage.getItem('jwt-token');
      this.$http.get('/api/dog?token=' + token).then((response) => {
        this.dogs = response.data.dogs;
      }, (response) => {
        this.message = 'No Data';
      });
    },
  };
</script>