import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CardItem from '../CardItem/CardItem';
import style from './style.module.css';

export default function SectionViewChallenge() {
  const { id } = useParams();
  const navigate = useNavigate();
  const navigateHandler = () => navigate(`/challenge/${id}`);
  return (
    <>
      {/* <div className={style.section_data}>
        <div>
          <Link to="/api/#" className="me-3">Все сообщества</Link>
          <Link to="/api/#">Управление</Link>
        </div>
        <Button type="button">Создать сообщество</Button>
      </div> */}
      <div className={style.section}>
        <CardItem navigateHandler={navigateHandler} />
      </div>
    </>
  );
}
