import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { checkMember } from './checkMemberSlice';
import { getOneCommunity } from './communitySlice';

const initialState = [];

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setCurrAdmin(state, action) {
      return action.payload;
    },

    setNewMember(state, action) {
      console.log('ACTION PAYLOAD', action.payload);
      return [...state, action.payload];
    },

    setDeleteMember(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { setCurrAdmin, setNewMember, setDeleteMember } = memberSlice.actions;
export default memberSlice.reducer;

export const getCurrAdmin = (id) => (dispatch) => {
  axios.get(`/api/community/communities/${id}/currAdmin`)
    .then((res) => dispatch(setCurrAdmin(res.data)))
    .catch(console.log);
};

export const createMember = (id) => (dispatch) => {
  console.log('COMM', id);
  axios.post(`/api/community/communities/${id}/join`, { withCredentials: true })
    .then((res) => {
      dispatch(setNewMember(res.data)); console.log('CREATE', res.data);
    })
    .then((res) => dispatch(checkMember(id)))
    .catch(console.log);
};

export const deleteMember = (id) => (dispatch) => {
  console.log('COMM22', id);

  axios.delete(`/api/community/communities/${id}`, { withCredentials: true })
    .then((res) => { dispatch(setDeleteMember(res.data)); dispatch(checkMember(id)); console.log('DELTE', res.data); })
    .catch(console.log);
};
