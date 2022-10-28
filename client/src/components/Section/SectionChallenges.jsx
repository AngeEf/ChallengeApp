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
    // console.log(challenges);
    dispatch(getChallengesByCategoryLimit(category));
    // console.log('versia2', challenges);
  }, [category]);

  // console.log('versia3', challenges);
  return (
    <div className={style.section}>
      <h2 className={style.section_title}>Испытания</h2>
      <div className={style.section_content}>

        <div className={style.cards}>
          {/* card 1 */}
          {Array.isArray(challenges) && challenges?.map((el) => (

            <div className={style.card} onClick={() => navigate(`/challenge/${el.id}`)} key={el.id}>
              <div className={style.card_box}>
                {/* {console.log(el)} */}
                <img
                  className={style.card_img}
                  src={`http://localhost:3001/${el?.icon_image}`}
                  alt="challeng"
                />
              </div>
              <div className={style.card_content}>
                <h3 className={style.card_title}>{el?.title}</h3>
                <h5 className={style.card_subtitle}>{el?.subtitle}</h5>
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
