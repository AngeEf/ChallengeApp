import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCommunities, getOneCommunity } from '../../app/slices/communitySlice';
import Members from '../Members/Members';
import Posts from '../Posts/Posts';
import Statistics from '../Statistics/Statistics';
import style from './style.module.css';

export default function CommunityView() {
  const background = 'https://i.pinimg.com/564x/79/d3/66/79d3667409ad6ee99cfc400bf2a76da1.jpg';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [communitiy, setCommunity] = useState({});
  const communities = useSelector((state) => state.communities);

  useEffect(() => {
    axios.get(`/api/community/communities/${id}`)
      .then((res) => setCommunity(res.data));
  }, []);

  return (
    <div className={`${style.wrapper}`}>
      <div>
        <img className={`${style.background}`} src={communitiy?.image ? communitiy?.image : background} alt="background" />
        <div className={`${style.community__wrapper}`}>
          <h2 className={`${style.community__title}`}>{communitiy?.title}</h2>
          <button className={`${style.community__btn}`} type="submit" onClick={() => navigate('/login')}>Присоединиться</button>
        </div>
        <p className={`${style.community__desc}`}>{communitiy?.description}</p>
        <div className={`${style.admin__post}`}>
          <div className={`${style.admin__postHeader}`}>
            <i className={`${style.admin__postIcon} bi bi-pin-angle`} />
            <img className={style.admin__postAvatar} src={background} alt="" />
            <p className={`${style.admin__postTitle}`}>Задание дня</p>
          </div>
          <div className={`${style.admin__postText}`}>
            Дождь, ветер и температура на градуснике снижают мотивацию тренироваться и пробуждают лень. Но стоит заставить себя выйти на пробежку и преодолеть первые километры, — и ситуация уже не кажется столь драматичной.
          </div>
        </div>
        <div className={`${style.posts__wrapper}`}>
          <Posts />
        </div>
      </div>
      <div className={`${style.community__right}`}>
        <Members />
        <Statistics />
      </div>
    </div>
  );
}
