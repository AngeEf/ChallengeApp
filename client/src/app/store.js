import { configureStore } from '@reduxjs/toolkit';
import challengeSlice from './slices/challengeSlice';
import communitySlice from './slices/communitySlice';
import memberSlice from './slices/memberSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    challenge: challengeSlice,
    communities: communitySlice,
    member: memberSlice,
  },
});
