import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCommunities } from '../../app/slices/communitySlice';
import userSlice, { checkAuth } from '../../app/slices/userSlice';
import CardItem from '../CardItem/CardItem';
import style from './style.module.css';

export default function SectionViewCommunity() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const communities = useSelector((state) => state.communities);

  useEffect(() => {
    dispatch(getCommunities());
  }, []);

  const navigateHandler = (id) => navigate(`/community/${id}`);

  // console.log('USER', user);

  return (
    <>
      <div className={style.section_data}>
        <div>
          {/* <Link to="/api/#" className="me-3">Все сообщества</Link> */}
          {/* <Link to="/api/#">Управление</Link> */}
          <Link to="/api/#" className={style.section_links}>Все сообщества</Link>
          <Link to="/api/#" className={style.section_links}>Управление</Link>
        </div>
        {/* <button className="btn-main" onClick={() => navigate('/community/new')} type="button">Создать сообщество</button> */}
        {user?.id ? <button className="btn-main" onClick={() => navigate('/community/new')} type="button">Создать сообщество</button>
          : <button className="btn-main" onClick={() => navigate('/login')} type="button">Создать сообщество</button>}
      </div>
      <div className={style.section}>
        {Array.isArray(communities) && communities?.map((el) => <CardItem key={el.id} community={el} navigateHandler={navigateHandler} />)}

      </div>
    </>
  );
}
