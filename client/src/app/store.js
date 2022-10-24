import { configureStore } from '@reduxjs/toolkit';
import communitySlice from './slices/communitySlice';
import memberSlice from './slices/memberSlice';
import multerSlice from './slices/multerSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    communities: communitySlice,
    member: memberSlice,
    multer: multerSlice,
  },
});
