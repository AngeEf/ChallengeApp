import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

const adminPostSlice = createSlice({
  name: 'adminPost',
  initialState,
  reducers: {
    setAdminPost(state, action) {
      return action.payload;
    },

    showAdminPost(state, action) {
      return action.payload;
    },
  },
});

export const { setAdminPost, showAdminPost } = adminPostSlice.actions;
export default adminPostSlice.reducer;

export const getAdminPost = (id) => (dispatch) => {
  axios.get(`http://localhost:3001/api/post/${id}/posts/newAdmin`)
    .then((res) => dispatch(showAdminPost(res.data)))
    .catch(console.log);
};

export const createAdminPost = (data, id) => (dispatch) => {
  axios.post(`http://localhost:3001/api/post/${id}/posts/newAdmin`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  })
    .then((res) => { dispatch(setAdminPost(res.data)); dispatch(getAdminPost(id)); })
    .catch(console.log);
};
