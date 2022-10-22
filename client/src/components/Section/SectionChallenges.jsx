import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { getChallengesByCategoryLimit } from '../../app/slices/challengeSlice';

export default function SectionChallenges() {
  const challenges = useSelector((state) => state.challenges);
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getChallengesByCategoryLimit(category));
  }, []);
  return (
    <div className={style.section}>
      <h2 className={style.section_title}>Испытания</h2>
      <div className={style.section_content}>

        <div className={style.cards}>
          {/* card 1 */}
          {challenges?.map((el) => (
            <div className={style.card} onClick={() => navigate(`/challenge/${el.id}`)}>
              <div className={style.card_box}>
                <img className={style.card_img} src={el.image} alt="challenge" />
              </div>
              <div className={style.card_content}>
                <h3>{el.title}</h3>
                <h5>{el.subtitle}</h5>
              </div>
            </div>
          ))}
          {/* card 2 */}

        </div>
      </div>
      {/* section_cards */}
      <Button variant="link" className={style.card_btn} onClick={() => navigate('/category/challenge')}>See more info</Button>
    </div>
  );
}
