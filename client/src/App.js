import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './components/MainPage/MainPage';
import CategoryView from './components/CategoryView/CategoryView';
import CommunityView from './components/CommunityView/CommunityView';
import ChallengeView from './components/ChallengeView/ChallengeView';
import NavComponent from './components/NavComponent/NavComponent';
import Login from './components/Login/Login';
import SingUp from './components/SignUp/SignUp';
import Progress from './components/Progress/Progress';
import { checkAuth } from './app/slices/userSlice';
import Profile from './components/Profile/Profile';
import SectionViewChallenge from './components/SectionView/SectionViewChallenge';
import SectionViewCommunity from './components/SectionView/SectionViewCommunity';
import NewCommunity from './components/newCommunity/NewCommunity';
import UpdateCommunity from './components/UpdateCommunity/UpdateCommunity';
import ProtectedRoute from './helper/ProtectedRoute/ProtectedRoute';

function App() {
  const user = useSelector((state) => state.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);
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
      ,
    </div>
  );
}

export default App;
