import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCommunityByCategoryLimit } from '../../app/slices/communitySlice';
import style from './style.module.css';

export default function SectionCommunities() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const communities = useSelector((state) => state.communities);
  const { category } = useParams();

  // useEffect(() => {
  //   dispatch(getCommunities());
  // }, []);

  useEffect(() => {
    dispatch(getCommunityByCategoryLimit(category));
  }, []);

  return (
    <div className={style.section}>
      <h2 className={style.section_title}>Сообщества</h2>
      <div className={style.section_content}>

        <div className={style.cards}>

          {/* {communities?.slice(0, 6).map((el) => (
            <>
              <div className={style.card}>
                <div className={style.card_box}>
                  <img className={style.card_img} src={el.image ? el.image : 'https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png'} alt="challenge" />
                </div>
                <div className={style.card_content}>
                  <h3>{el.title}</h3>
                  <h5>{el.subtitle}</h5>
                </div>
              </div>
            </>
          ))} */}

          {communities?.map((el) => (
            <div key={el.id}>
              <div className={style.card} onClick={() => navigate(`/challenge/${el.id}`)}>
                <div className={style.card_box}>
                  <img className={style.card_img} src={el.image ? el.image : 'https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png'} alt="challenge" />
                </div>
                <div className={style.card_content}>
                  <h3 className={style.card_title}>{el.title}</h3>
                  <h5 className={style.card_subtitle}>{el.subtitle}</h5>
                </div>
              </div>
            </div>
          ))}

          {/* card 1 */}
          {/* <div className={style.card}>
            <div className={style.card_box}>
              <img className={style.card_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
            </div>
            <div className={style.card_content}>
              <h3>Card Title</h3>
              <h5>Some quick example</h5>
            </div>
          </div> */}

          {/* final */}
        </div>
      </div>
      {/* section_cards */}
      <button type="button" className={style.card_btn} onClick={() => navigate('/category/community')}>Посмотреть все</button>
    </div>
  );
}
