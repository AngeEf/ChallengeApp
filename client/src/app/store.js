import { configureStore } from '@reduxjs/toolkit';
import adminPostSlice from './slices/adminPostSlice';
import adminSlice from './slices/adminSlice';
import challengeSlice from './slices/challengeSlice';
import communitySlice from './slices/communitySlice';
import gameSlice from './slices/gameSlice';
import memberSlice from './slices/memberSlice';
import postSlice from './slices/postSlice';
import userGameSlice from './slices/userGameSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    challenges: challengeSlice,
    communities: communitySlice,
    member: memberSlice,
    post: postSlice,
    game: gameSlice,
    userGame: userGameSlice,
    adminPost: adminPostSlice,
    admin: adminSlice,
  },
});
