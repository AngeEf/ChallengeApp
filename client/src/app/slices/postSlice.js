import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts(state, action) {
      return action.payload;
    },
    newPost(state, action) {
      return [...state, action.payload];
    },

    newAdminPost(state, action) {
      return action.payload;
    },
  },
});

export const { setPosts, newPost, newAdminPost } = postSlice.actions;
export default postSlice.reducer;

export const getPosts = (id) => (dispatch) => {
  axios.get(`/api/post/${id}/posts`)
    .then((res) => dispatch(setPosts(res.data)))
    .catch(console.log);
};

export const createAdminPost = (id, input, img) => (dispatch) => {
  axios.post(`/api/post/${id}/posts/newAdmin`, { id, input, img })
    .then((res) => dispatch(newAdminPost(res.data)))
    .catch(console.log);
};
