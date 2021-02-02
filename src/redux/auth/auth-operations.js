import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const registerUser = newUser => async dispatch => {
  dispatch(registerRequest());
  try {
    const { data } = await axios.post('/users/signup', newUser);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

const logIn = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const { data } = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
  }
};

export { registerUser, logIn, logOut, getCurrentUser };
