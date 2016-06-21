import { LOGIN, LOGOUT, VALIDATE_ERROR, CREATE_DOG } from './mutation-types.js';

export const me = ({ dispatch }, name, token) => dispatch(LOGIN, name, token);

export const register = ({ dispatch }, _this, name, email, password, password_confirmation) => {
  _this.$http.post('/api/register', {name, email, password, password_confirmation}).then((response) => {
    dispatch(LOGIN, response.data.name, response.data.token);
    _this.$route.router.go({ name: 'profile' });
  }, (response) => {
    dispatch(VALIDATE_ERROR, response.data.errors);
  });
};

export const login = ({ dispatch }, _this, email, password) => {
  _this.$http.post('/api/login', {email, password}).then((response) => {
    dispatch(LOGIN, response.data.name, response.data.token);
    _this.$route.router.go({ name: 'profile' });
  }, (response) => {
    dispatch(VALIDATE_ERROR, [response.data.error]);
  });
};

export const logout = ({ dispatch }) => dispatch(LOGOUT);

export const createDog = ({ dispatch, state }, _this, name, age) => {
  _this.$http.post('/api/dog?token=' + state.token, {name, age}).then((response) => {
    _this.$route.router.go({ name: 'index' });
  }, (response) => {
    dispatch(VALIDATE_ERROR, response.data.errors);
  });
};

export const editDog = ({ dispatch, state }, _this, id, name, age) => {
  _this.$http.put('/api/dog/edit/' + id + '?token=' + state.token, {name, age}).then((response) => {
    location.reload();
  }, (response) => {
    alert('Update failed');
  });
};

export const deleteDog = ({ dispatch, state }, _this, id) => {
  _this.$http.delete('/api/dog/' + id + '?token=' + state.token).then((response) => {
    location.reload();
  }, (response) => {
    alert('Delete failed');
  });
};

