import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setCurrAdmin(state, action) {
      return action.payload;
    },

    setNewMember(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { setCurrAdmin, setNewMember, setCheckMember } = memberSlice.actions;
export default memberSlice.reducer;

export const getCurrAdmin = (id) => (dispatch) => {
  axios.get(`/api/community/communities/${id}/currAdmin`)
    .then((res) => dispatch(setCurrAdmin(res.data)))
    .catch(console.log);
};

export const createMember = (id) => (dispatch) => {
  axios.post(`/api/community/communities/${id}/join`, { withCredentials: true })
    .then((res) => dispatch(setNewMember(res.data)))
    .catch(console.log);
};
