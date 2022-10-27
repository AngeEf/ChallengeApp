import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allSubscriptionsUserAsync } from '../../app/slices/userCommunitySlice';
import style from './style.module.css';

const background = 'https://i.pinimg.com/564x/79/d3/66/79d3667409ad6ee99cfc400bf2a76da1.jpg';
export default function TaskFromCommunity() {
  const userCommunity = useSelector((state) => state.userCommunity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allSubscriptionsUserAsync());
  }, []);
  // console.log(userCommunity);
  return (
    <>
      {userCommunity?.map((el) => (

        <div className={`${style.admin__post}`}>
          <div className={`${style.admin__postHeader}`}>
            <i className={`${style.admin__postIcon} bi bi-pin-angle`} />
            <img className={style.admin__postAvatar} src={el.image || 'http://www.strattonspine.com/images/uploads/Running_Gait.jpg'} alt="sport" />
            <Link to={`/community/${el.community_id}`} className={`${style.admin__postTitle}`}>Задание дня</Link>
          </div>
          <div className={`${style.admin__postText}`}>
            {el.content}
          </div>
        </div>
      ))}
    </>
    // <div>TaskFromCommunity</div>
  );
}
