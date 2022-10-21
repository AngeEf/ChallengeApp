import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './components/MainPage/MainPage';
import CategotyView from './components/CategoryView/CategoryView';
import CommunityView from './components/CommunityView/CommunityView';
import SectionView from './components/SectionView/SectionView';
import ChallengeView from './components/ChallengeView/ChallengeView';
import NavComponent from './components/NavComponent/NavComponent';
import Login from './components/Login/Login';
import SingUp from './components/SignUp/SignUp';
import { checkAuth } from './app/slices/userSlice';

function App() {
  const user = useSelector((state) => state.user);
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
          <Route path="/category/:category" element={<CategotyView />} />
          <Route path="/category/group" element={<SectionView />} />
          <Route path="/community/:id" element={<CommunityView />} />
          <Route path="/challenge/:id" element={<ChallengeView />} />
          {/* <Route path="/challenge/:id" element={<ChallengeView />} /> */}
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<SingUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
