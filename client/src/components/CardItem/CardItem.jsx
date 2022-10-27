import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneCommunity } from '../../app/slices/communitySlice';
import style from './style.module.css';

export default function CardItem({ navigateHandler, community }) {
  const image = 'https://i.pinimg.com/564x/af/53/c4/af53c4688d8dfa0614adf6936ae410ea.jpg';

  console.log(community.title);
  return (
    <>
      <Card className={style.card} style={{ border: 'none' }}>
        <div className={style.cart_img}>
          <Card.Img className={style.cart_photo} variant="top" src={community?.image ? `http://localhost:3001/${community?.image}` : image} />
        </div>
        <Card.Body className={style.card__body}>
          <Card.Title className={style.card__title}>{community?.title}</Card.Title>
          <Card.Text className={style.card__text}>{`${community.subtitle?.slice(0, 60)}...`}</Card.Text>
          <button type="button" className={style.card__btn} onClick={() => navigateHandler(community.id)}>Подробнее</button>
        </Card.Body>
      </Card>
    </>
  );
}
