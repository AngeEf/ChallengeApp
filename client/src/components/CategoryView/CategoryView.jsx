import React from 'react';
import { Col } from 'react-bootstrap';
import SectionChallenges from '../Section/SectionChallenges';
import SectionCommunities from '../Section/SectionCommunities';
import style from './style.module.css';

export default function CategoryView() {
  // challenges
  // communities
  return (
    <div className={style.categoryView}>
      <SectionChallenges />
      <SectionCommunities />
    </div>
  );
}
