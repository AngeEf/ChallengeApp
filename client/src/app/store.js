import { configureStore } from '@reduxjs/toolkit';
import communitySlice from './slices/communitySlice';
import memberSlice from './slices/memberSlice';
import postSlice from './slices/postSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    communities: communitySlice,
    member: memberSlice,
    post: postSlice,
  },
});
