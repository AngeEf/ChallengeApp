import { configureStore } from '@reduxjs/toolkit';
import challengeSlice from './slices/challengeSlice';
import communitySlice from './slices/communitySlice';
import memberSlice from './slices/memberSlice';
import multerSlice from './slices/multerSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    challenges: challengeSlice,
    communities: communitySlice,
    member: memberSlice,
    multer: multerSlice,
  },
});
