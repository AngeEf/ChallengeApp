import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainPage from './components/MainPage/MainPage';
import CategotyView from './components/CategoryView/CategoryView';
import CommunityView from './components/CommunityView/CommunityView';
import SectionView from './components/SectionView/SectionView';
import ChallengeView from './components/ChallengeView/ChallengeView';
import MyNavbar from './components/NavComponent/NavComponent';

function App() {
  return (
    <Container>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:category" element={<CategotyView />} />
        <Route path="/:category/group" element={<SectionView />} />
        <Route path="/community/:id" element={<CommunityView />} />
        <Route path="/challenge/:id" element={<ChallengeView />} />
      </Routes>
    </Container>
  );
}

export default App;
