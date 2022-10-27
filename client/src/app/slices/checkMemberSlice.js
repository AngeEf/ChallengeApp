import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = false;

const checkMemberSlice = createSlice({
  name: 'checkMember',
  initialState,
  reducers: {
    isMember(state, action) {
      return action.payload;
    },
  },
});

export const { isMember } = checkMemberSlice.actions;
export default checkMemberSlice.reducer;

export const checkMember = (id) => (dispatch) => {
  axios.get(`/api/user/check/${id}/member`)
    .then((res) => { dispatch(isMember(res.data)); console.log('ISMEMBER', res.data); })
    .catch(console.log);
};
