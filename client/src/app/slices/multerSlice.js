import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const multerSlice = createSlice({
  name: 'multer',
  initialState,
  reducers: {
    setMulter(state, action) {
      return action.payload;
    },
  },
});

export const { setMulter } = multerSlice.actions;
export default multerSlice.reducer;

export const getMulters = (id) => (dispatch) => {
  axios.get(`/api/upload/${id}`)
    .then((res) => dispatch(setMulter(res.data)))
    .catch(console.log);
};

// useEffect(() => {
//   axios.get(`/api/community/communities/${id}`)
//     .then((res) => setCommunity(res.data));
// }, []);
