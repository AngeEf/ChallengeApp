import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneCommunity } from '../../app/slices/communitySlice';
import style from './style.module.css';

export default function CardItem({ navigateHandler, community }) {
  return (
    <>
      <Card className={style.card}>
        <div className={style.cart_img}>
          <Card.Img className={style.cart_photo} variant="top" src={community.image ? community.image : 'https://www.goyder.sa.gov.au/__data/assets/image/0030/544773/sports.jpg'} />
        </div>
        <Card.Body>
          <Card.Title>{community.title}</Card.Title>
          <Card.Text>{community.subtitle}</Card.Text>
          <Button variant="primary" onClick={() => navigateHandler(community.id)}>Подробнее</Button>
        </Card.Body>
      </Card>
      {/* cards 2 */}

      {/* final */}
    </>
  );
}
