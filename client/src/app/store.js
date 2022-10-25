import { configureStore } from '@reduxjs/toolkit';
import adminPostSlice from './slices/adminPostSlice';
import adminSlice from './slices/adminSlice';
import challengeSlice from './slices/challengeSlice';
import checkAdminSlice from './slices/checkAdminSlice';
import checkMemberSlice from './slices/checkMemberSlice';
import communitySlice from './slices/communitySlice';
import gameSlice from './slices/gameSlice';
import memberSlice from './slices/memberSlice';
import multerSlice from './slices/multerSlice';
import postSlice from './slices/postSlice';
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
    checkMember: checkMemberSlice,
    checkAdmin: checkAdminSlice,
  },
});
