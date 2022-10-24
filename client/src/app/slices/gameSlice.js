import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = null;

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    createNewGame(state, action) {
      return action.payload;
    },
    allActiveGame(state, action) {
      return action.payload;
    },
  },
});

export const { createNewGame, allActiveGame } = gameSlice.actions;
export default gameSlice.reducer;

export const createNewGameAsync = (datas) => (dispatch) => {
  axios.post('/api/game/create', { datas }, {
    withCredentials: true,
  })
    .then((res) => dispatch(createNewGame(res.data)))
    .catch(console.log);
};

export const allActiveGameAsync = (id) => (dispatch) => {
  axios(`/api/game/players/${id}`)
    .then((res) => dispatch(allActiveGame(res.data)))
    .catch(console.log);
};
