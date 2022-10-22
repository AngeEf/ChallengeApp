import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardItemChallenge from '../CardItemChallenge/CardItemChallenge';
import style from './style.module.css';
import { getChallenges } from '../../app/slices/challengeSlice';

export default function SectionViewChallenge() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getChallenges());
  // }, []);
  return (
    <>
      {/* <div className={style.section_data}>
        <div>
          <Link to="/api/#" className="me-3">Все сообщества</Link>
          <Link to="/api/#">Управление</Link>
        </div>
        <Button type="button">Создать сообщество</Button>
      </div> */}
      <div className={style.section}>
        <CardItemChallenge />
      </div>
    </>
  );
}
