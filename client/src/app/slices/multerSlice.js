import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const multerSlice = createSlice({
  name: 'multer',
  initialState,
  reducers: {
    setMulter(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { setMulter } = multerSlice.actions;
export default multerSlice.reducer;

export const getmulters = (id) => () => {
  axios.get(`/api/upload/${id}`)
    .then((res) => console.log(res))
    // dispatch(setMulter(res.data)))
    .catch(console.log);
};
