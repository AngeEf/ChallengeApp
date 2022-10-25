import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = false;

const checkAdminSlice = createSlice({
  name: 'checkMember',
  initialState,
  reducers: {
    isAdmin(state, action) {
      return action.payload;
    },
  },
});

export const { isAdmin } = checkAdminSlice.actions;
export default checkAdminSlice.reducer;

export const checkAdmin = (id) => (dispatch) => {
  axios.get(`api/user/check/${id}/admin`)
    .then((res) => isAdmin(res.data))
    .catch(console.log());
};
