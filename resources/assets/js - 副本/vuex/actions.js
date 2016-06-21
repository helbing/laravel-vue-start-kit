import { LOGIN, LOGOUT, VALIDATE_ERROR } from './mutation-types.js';

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

