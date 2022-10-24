import { configureStore } from '@reduxjs/toolkit';
import challengeSlice from './slices/challengeSlice';
import communitySlice from './slices/communitySlice';
import gameSlice from './slices/gameSlice';
import memberSlice from './slices/memberSlice';
import userGameSlice from './slices/userGameSlice';
import userSlice from './slices/userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    challenges: challengeSlice,
    communities: communitySlice,
    member: memberSlice,
    game: gameSlice,
    userGame: userGameSlice,
  },
});
