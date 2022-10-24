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
  },
});

export const { setCommunities, setOneCommunity } = communitySlice.actions;
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
