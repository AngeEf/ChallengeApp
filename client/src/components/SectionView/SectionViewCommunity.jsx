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

  console.log('USER', user);

  return (
    <>
      <div className={style.section_data}>
        <div>
          <Link to="/api/#" className="me-3">Все сообщества</Link>
          {/* <Link to="/api/#">Управление</Link> */}
        </div>
        {user?.id ? <Button onClick={() => navigate('/community/new')} type="button">Создать сообщество</Button>
          : <Button onClick={() => navigate('/login')} type="button">Создать сообщество</Button>}
      </div>
      <div className={style.section}>
        {Array.isArray(communities) && communities?.map((el) => <CardItem key={el.id} community={el} navigateHandler={navigateHandler} />)}

      </div>
    </>
  );
}
