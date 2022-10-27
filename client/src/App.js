import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { checkAuth } from './app/slices/userSlice';
import CategoryView from './components/CategoryView/CategoryView';
import ChallengeView from './components/ChallengeView/ChallengeView';
import CommunityView from './components/CommunityView/CommunityView';
import Login from './components/Login/Login';
import MainPage from './components/MainPage/MainPage';
import NavComponent from './components/NavComponent/NavComponent';
import NewCommunity from './components/newCommunity/NewCommunity';
import Profile from './components/Profile/Profile';
import Progress from './components/Progress/Progress';
import SectionViewChallenge from './components/SectionView/SectionViewChallenge';
import SectionViewCommunity from './components/SectionView/SectionViewCommunity';
import SingUp from './components/SignUp/SignUp';
import UpdateCommunity from './components/UpdateCommunity/UpdateCommunity';
import ProtectedRoute from './helper/ProtectedRoute/ProtectedRoute';

function App() {
  const user = useSelector((state) => state.user);
  const multer = useSelector((state) => (state.multer));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [multer]);
  return (
    <div className="page">
      <NavComponent />
      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category/:category" element={<CategoryView />} />
          <Route path="/category/challenge" element={<SectionViewChallenge />} />
          <Route path="/category/community" element={<SectionViewCommunity />} />
          <Route path="/community/:id" element={<CommunityView />} />
          <Route path="/challenge/:id" element={<ChallengeView />} />
          {/* <Route path="/progress/:id" element={<Progress />} /> */}
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<SingUp />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/community/new" element={<NewCommunity />} />
          <Route path="/community/:id/update" element={<UpdateCommunity />} />
          {user?.id && (
            <Route element={<ProtectedRoute isAllowed={!!user.id} redirect="/login" />}>
              <Route path="/progress/:id" element={<Progress />} />
            </Route>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
