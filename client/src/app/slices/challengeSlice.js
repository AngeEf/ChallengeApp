import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const challengeSlice = createSlice({
  name: 'challengeSlice',
  initialState,
  reducers: {
    setChallenges(state, action) {
      return action.payload;
    },
    setOneChallenge(state, action) {
      return action.payload;
    },
    setChallengeByCategoryLimit(state, action) {
      return action.payload;
    },
  },
});

export const { setChallenges, setOneChallenge, setChallengeByCategoryLimit } = challengeSlice.actions;
export default challengeSlice.reducer;

export const getChallenges = () => (dispatch) => {
  axios.get('/api/challenge/all')
    .then((res) => dispatch(setChallenges(res.data)))
    .catch(console.log);
};

export const getChallengesByCategoryLimit = (category) => (dispatch) => {
  axios(`/api/category/challenge/${category}`)
    .then((res) => dispatch(setChallengeByCategoryLimit(res.data)));
};

export const getOneCommunity = (id) => (dispatch) => {
  axios.get(`/api/challenge/${id}`)
    .then((res) => dispatch(setOneChallenge(res.data)))
    .catch(console.log);
};
