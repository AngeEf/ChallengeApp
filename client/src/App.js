import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './components/MainPage/MainPage';
import CategotyView from './components/CategoryView/CategoryView';
import CommunityView from './components/CommunityView/CommunityView';
import SectionView from './components/SectionView/SectionView';
import ChallengeView from './components/ChallengeView/ChallengeView';
import NavComponent from './components/NavComponent/NavComponent';
import Login from './components/Login/Login';
import SingUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="page">
      <NavComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/:category" element={<CategotyView />} />
        <Route path="/category//group" element={<SectionView />} />
        <Route path="/community/:id" element={<CommunityView />} />
        <Route path="/challenge/:id" element={<ChallengeView />} />
        <Route path="/challenge/:id" element={<ChallengeView />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<SingUp />} />
      </Routes>
    </div>
  );
}

export default App;
