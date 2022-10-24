import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const userGameSlice = createSlice({
  name: 'userGameSlice',
  initialState,
  reducers: {
    allActiveGameOfUser(state, action) {
      return action.payload;
    },
    oneUserGame(state, action) {
      // console.log(action);
      return action.payload;
    },
    changeProgress(state, action) {
      return action.payload;
    },
  },
});

export const { allActiveGameOfUser, oneUserGame, changeProgress } = userGameSlice.actions;
export default userGameSlice.reducer;

export const oneUserGameAsync = (id) => (dispatch) => {
  axios(`/api/game/player/${id}`)
    // .then((res) => console.log(res.data))
    .then((res) => dispatch(oneUserGame(res.data)))
    .catch(console.log);
};

export const allActiveGameOfUserAsync = () => (dispatch) => {
  axios('/api/game/all', {
    withCredentials: true,
  })
    .then((res) => dispatch(allActiveGameOfUser(res.data)))
    .catch(console.log);
};

export const changeProgressAsync = (obj, id) => (dispatch) => {
  axios.patch(`./api/game/progress/${id}`, { obj })
    .then((res) => dispatch(changeProgress(res.data)))
    .then((res) => dispatch(allActiveGameOfUserAsync()))
    .catch(console.log);
};
