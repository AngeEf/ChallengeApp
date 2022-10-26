import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthUser(state, action) {
      return action.payload;
    },
    logoutUser() {
      return {};
    },
  },
});

export const { setAuthUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

export const checkAuth = () => (dispatch) => {
  axios.post('/api/user/check')
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const loginUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/user/login', inputs)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const signupUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  // inputs.append('avatar', img);
  console.log(Object.fromEntries(inputs));
  axios.post('/api/user/signup', inputs, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const logoutUserAsync = () => (dispatch) => {
  axios('/api/user/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};
