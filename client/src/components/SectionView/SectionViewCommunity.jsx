import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCommunities } from '../../app/slices/communitySlice';
import CardItem from '../CardItem/CardItem';
import style from './style.module.css';

export default function SectionViewCommunity() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const communities = useSelector((state) => state.communities);

  useEffect(() => {
    dispatch(getCommunities());
  }, []);

  const navigateHandler = (id) => navigate(`/community/${id}`);

  return (
    <>
      <div className={style.section_data}>
        <div>
          <Link to="/api/#" className="me-3">Все сообщества</Link>
          {/* <Link to="/api/#">Управление</Link> */}
        </div>
        <Button onClick={() => navigate('/community/new')} type="button">Создать сообщество</Button>
      </div>
      <div className={style.section}>
        {communities?.map((el) => <CardItem key={el.id} community={el} navigateHandler={navigateHandler} />)}

      </div>
    </>
  );
}
