import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    setCommunities(state, action) {
      return action.payload;
    },
    setOneCommunity(state, action) {
      return action.payload;
    },
    newCommunity(state, action) {
      return [...state, action.payload];
    },

    setCountMembers(state, action) {
      return action.payload
    },
    setCommunityByCategoryLimit(state, action) {
      return action.payload;
  },
});

export const {
  setCommunities, setOneCommunity, setCountMembers, newCommunity,
} = communitySlice.actions;
// export const { setCommunities, setOneCommunity, setCommunityByCategoryLimit } = communitySlice.actions;
export default communitySlice.reducer;

export const getCommunities = () => (dispatch) => {
  axios.get('/api/community/communities')
    .then((res) => dispatch(setCommunities(res.data)))
    .catch(console.log);
};

export const getOneCommunity = (id) => (dispatch) => {
  axios.get(`/api/community/communities/${id}`)
    .then((res) => dispatch(setOneCommunity(res.data)))
    .catch(console.log);
};

export const countMembers = (id) => (dispatch) => {
  axios.get(`/api/community/communities/${id}/count`)
    .then((res) => dispatch(setCountMembers(res.data)))
    .catch(console.log);
};

export const setNewCommunity = (input) => (dispatch) => {
  axios.post('/api/community/communities', { input }, { withCredentials: true })
    .then((res) => dispatch(newCommunity(res.data)))
    .catch(console.log);
export const getCommunityByCategoryLimit = (category) => (dispatch) => {
  axios(`/api/category/community/${category}`)
    .then((res) => dispatch(setCommunityByCategoryLimit(res.data)));
};
