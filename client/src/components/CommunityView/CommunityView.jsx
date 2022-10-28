import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAdmin } from '../../app/slices/adminSlice';
import { checkAdmin } from '../../app/slices/checkAdminSlice';
import { checkMember } from '../../app/slices/checkMemberSlice';
import { getCommunities, getOneCommunity } from '../../app/slices/communitySlice';
import { createMember, deleteMember, getCurrAdmin } from '../../app/slices/memberSlice';
import Members from '../Members/Members';
import Posts from '../Posts/Posts';
import Statistics from '../Statistics/Statistics';
import style from './style.module.css';

export default function CommunityView() {
  const background = 'https://i.pinimg.com/564x/7e/4e/4f/7e4e4f5f1d6bd58c560cf3c65944d086.jpg';
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
  const isAdmin = useSelector((state) => state.checkAdmin);
  const isMember = useSelector((state) => state.checkMember);

  const [state, setState] = useState(false);

  useEffect(() => {
    dispatch(getOneCommunity(id));
  }, []);

  useEffect(() => {
    dispatch(checkMember(id));
  }, []);

  useEffect(() => {
    dispatch(checkAdmin(id));
  }, []);

  const joinHandler = () => {
    dispatch(createMember(id));
  };

  const leaveHandler = () => {
    // axios.delete(`api/user/check/${id}/member`)
    //   .then((res) => getCurrAdmin(false));
    dispatch(deleteMember(id));
  };

  // console.log('admin', admin?.name);
  // console.log('user', user?.name);
  // console.log('isMember', isMember);
  // console.log('image', communities.image);

  return (
    <div className={`${style.wrapper}`}>
      <div className={style.community__left}>
        <img className={style.background} src={communities?.image ? `http://localhost:3001/${communities?.image}` : background} alt="" />
        <div className={`${style.community__wrapper}`}>
          <h2 className={`${style.community__title}`}>{communities?.title}</h2>
          <div>

            {admin?.id === user?.id && (<button className={`${style.community__btn__update}`} type="submit" onClick={() => navigate(`${location.search}update`)}>Редактировать</button>)}

            {(user?.id && !isMember && (admin?.id !== user?.id)) && (<button className={`${style.community__btn}`} type="submit" onClick={() => { joinHandler(); }}>Присоединиться</button>)}

            {/* {(user?.id && !isMember && !isAdmin) && (<button className={`${style.community__btn}`} type="submit" onClick={() => { joinHandler(); }}>Присоединиться</button>)} */}

            {!user?.id && (<button className={`${style.community__btn}`} type="submit" onClick={() => navigate('/login')}>Присоединиться!</button>)}

            {isMember && (<button className={`${style.community__btn__leave}`} type="submit" onClick={() => { leaveHandler(); }}>Выйти из группы</button>)}

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
