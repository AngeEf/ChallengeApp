import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const userCommunitySlice = createSlice({
  name: 'userCommunitySlice',
  initialState,
  reducers: {
    allSubscriptionsUser(state, action) {
      return action.payload;
    },

  },
});

export const { allSubscriptionsUser } = userCommunitySlice.actions;
export default userCommunitySlice.reducer;

export const allSubscriptionsUserAsync = () => (dispatch) => {
  axios('/api/subsription/all', {
    withCredentials: true,
  })
    // .then((res) => console.log(res.data))
    .then((res) => dispatch(allSubscriptionsUser(res.data)))
    .catch(console.log);
};
