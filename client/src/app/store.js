import { configureStore } from '@reduxjs/toolkit';
import challengeSlice from './slices/challengeSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    challenge: challengeSlice,
  },
});
