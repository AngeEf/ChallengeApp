import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMembers(state, action) {
      return action.payload;
    },
  },
});

export const { setMembers } = memberSlice.actions;
export default memberSlice.reducer;

export const getMembers = (id) => (dispatch) => {
  axios.get(`/api/community/communities/${id}/members`)
    .then((res) => dispatch(setMembers(res.data)))
    .catch(console.log);
};
