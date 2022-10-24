import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { checkAdmin, getAdmin } from '../../app/slices/adminSlice';
import { getCommunities, getOneCommunity } from '../../app/slices/communitySlice';
import { createMember } from '../../app/slices/memberSlice';
import Members from '../Members/Members';
import Posts from '../Posts/Posts';
import Statistics from '../Statistics/Statistics';
import style from './style.module.css';

export default function CommunityView() {
  const background = 'https://i.pinimg.com/564x/79/d3/66/79d3667409ad6ee99cfc400bf2a76da1.jpg';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [community, setCommunity] = useState({});
  const communities = useSelector((state) => state.communities);
  const user = useSelector((state) => state.user);
  const [member, setMember] = useState(false);
  const location = useLocation();
  const [adminPost, setAdminPost] = useState('');
  const admin = useSelector((state) => state.admin);

  useEffect(() => {
    // axios.get(`/api/community/communities/${id}`)
    //   .then((res) => setCommunity(res.data));
    dispatch(getOneCommunity(id));
  }, []);

  useEffect(() => {
    axios.get(`api/user/check/${id}/member`)
      .then((res) => setMember(res.data))
      .catch(console.log());
  }, []);

  useEffect(() => {
    // axios.get(`api/user/check/${id}/admin`)
    //   .then((res) => setAdmin(res.data))
    //   .catch(console.log());
    dispatch(checkAdmin(id));
  }, []);

  useEffect(() => {
    axios.get(`api/post/${id}/posts/admin`)
      .then((res) => setAdminPost(res.data));
  }, []);

  const joinHandler = () => {
    dispatch(createMember(id));
  };

  const leaveHandler = () => {
    axios.delete(`api/user/check/${id}/member`)
      .then((res) => setMember(false));
  };

  return (
    <div className={`${style.wrapper}`}>
      <div className={style.community__left}>
        <img className={`${style.background}`} src={communities?.image ? communities?.image : background} alt="background" />
        <div className={`${style.community__wrapper}`}>
          <h2 className={`${style.community__title}`}>{communities?.title}</h2>
          <div>
            {admin === user?.id && (<button className={`${style.community__btn__update}`} type="submit" onClick={() => navigate(`${location.search}update`)}>Редактировать</button>)}
            {(!member && (admin === user?.id)) && (<button className={`${style.community__btn}`} type="submit" onClick={() => joinHandler()}>Присоединиться</button>)}
            {member && (<button className={`${style.community__btn__leave}`} type="submit" onClick={() => leaveHandler()}>Выйти из группы</button>)}
          </div>
        </div>
        <p className={`${style.community__desc}`}>{communities?.description}</p>
        <div className={`${style.posts__wrapper}`}>
          <Posts community={communities} />
        </div>
      </div>
      <div className={`${style.community__right}`}>
        <Members />
        <Statistics community={communities} />
      </div>
    </div>
  );
}
