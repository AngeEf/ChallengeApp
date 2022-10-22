import { configureStore } from '@reduxjs/toolkit';
import communitySlice from './slices/communitySlice';
import memberSlice from './slices/memberSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    communities: communitySlice,
    member: memberSlice,
  },
});
