import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {};

const challengeSlice = createSlice({
  name: 'challengeSlice',
  initialState,
  reducers: {
    setChallenges(state, action) {
      return action.payload;
    },
  },
});

export const { setChallenges } = challengeSlice.actions;
export default challengeSlice.reducer;

// export const getAllChallenges = () => (dispatch) => {
//   axios.post('/api/challenge/')
//     .then((res) => dispatch(setChallenges(res.data)))
//     .catch(console.log);
// };
