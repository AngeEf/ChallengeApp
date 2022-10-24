import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getChallengesByCategoryLimit } from '../../app/slices/challengeSlice';
import style from './style.module.css';

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
            <div className={style.card} onClick={() => navigate(`/challenge/${el.id}`)} key={el.id}>
              <div className={style.card_box}>
                <img className={style.card_img} src={el.image} alt="challenge" />
              </div>
              <div className={style.card_content}>
                <h3 className={style.card_title}>{el.title}</h3>
                <h5 className={style.card_subtitle}>{el.subtitle}</h5>
              </div>
            </div>
          ))}
          {/* card 2 */}

        </div>
      </div>
      {/* section_cards */}
      <button type="button" className={style.card_btn} onClick={() => navigate('/category/challenge')}>Посмотреть все</button>
    </div>
  );
}
