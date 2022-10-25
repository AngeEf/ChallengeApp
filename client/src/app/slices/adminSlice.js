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
  },
});

export const { setAdmin, isAdmin } = adminSlice.actions;
export default adminSlice.reducer;

export const getAdmin = (id) => (dispatch) => {
  axios.get(`/api/user/${id}/admin`)
    .then((res) => dispatch(setAdmin(res.data)))
    .catch(console.log);
};
