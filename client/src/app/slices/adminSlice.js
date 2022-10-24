import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = null;

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin(state, action) {
      return action.payload;
    },

    isAdmin(state, action) {
      return action.payload;
    },
  },
});

export const { setAdmin, isAdmin } = adminSlice.actions;
export default adminSlice.reducer;

export const getAdmin = (id) => (dispatch) => {
  axios.get(`/api/user/${id}/admin`)
    .then((res) => dispatch(setAdmin(res.data)))
    .catch(console.log);
};

export const checkAdmin = (id) => (dispatch) => {
  axios.get(`api/user/check/${id}/admin`)
    .then((res) => isAdmin(res.data))
    .catch(console.log());
};
