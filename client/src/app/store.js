import { configureStore } from '@reduxjs/toolkit';
import adminPostSlice from './slices/adminPostSlice';
import adminSlice from './slices/adminSlice';
import challengeSlice from './slices/challengeSlice';
import communitySlice from './slices/communitySlice';
import gameSlice from './slices/gameSlice';
import memberSlice from './slices/memberSlice';
import multerSlice from './slices/multerSlice';
import postSlice from './slices/postSlice';
import userCommunitySlice from './slices/userCommunitySlice';
import userGameSlice from './slices/userGameSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    challenges: challengeSlice,
    communities: communitySlice,
    member: memberSlice,
    multer: multerSlice,
    post: postSlice,
    game: gameSlice,
    userGame: userGameSlice,
    adminPost: adminPostSlice,
    admin: adminSlice,
    userCommunity: userCommunitySlice,
  },
});
