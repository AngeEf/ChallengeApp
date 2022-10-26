import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = null;

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

export const editFile = (img, id, imput) => (dispatch) => {
  const data = new FormData();
  data.append('avatar', img);
  data.append('name', imput.name);
  axios.post(`http://localhost:3001/api/upload/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  })
    .then((res) => dispatch(setMulter(res.data)));
};
