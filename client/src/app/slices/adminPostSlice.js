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

export const writeAdminPost = (id) => (dispatch) => {
  axios.get(`/api/post/${id}/posts/newAdmin`)
    .then((res) => dispatch(setAdminPost(res.data)))
    .catch(console.log);
};
