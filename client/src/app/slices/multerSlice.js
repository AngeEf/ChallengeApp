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

export const editFile = (img, id) => {
  const data = new FormData();
  data.append('avatar', img);

  axios.post(`http://localhost:3001/api/upload/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  });
};
