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
  },
});

export const { setPosts, newPost, newAdminPost } = postSlice.actions;
export default postSlice.reducer;

export const getPosts = (id) => (dispatch) => {
  axios.get(`/api/post/${id}/posts`)
    .then((res) => dispatch(setPosts(res.data)))
    .catch(console.log);
};

export const createNewPost = (data, id) => (dispatch) => {
  axios.post(`http://localhost:3001/api/post/${id}/posts/new`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  })
    .then((res) => { dispatch(newPost(res.data)); dispatch(getPosts(id)); })
    .catch(console.log);
};
