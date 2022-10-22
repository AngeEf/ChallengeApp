import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import { getOneCommunity } from '../../app/slices/challengeSlice';

export default function CardItemChallenge() {
  const challenges = useSelector((state) => state.challenges);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCommunity());
  }, []);

  const navigateHandler = () => navigate(`/challenge/${id}`);
  return (
    <>
      <Card className={style.card}>
        <div className={style.cart_img}>
          <Card.Img className={style.cart_photo} variant="top" src={challenges.image ? challenges.image : 'https://www.goyder.sa.gov.au/__data/assets/image/0030/544773/sports.jpg'} />
        </div>
        <Card.Body>
          <Card.Title>{challenges.title}</Card.Title>
          <Card.Text>{challenges.subtitle}</Card.Text>
          <Button variant="primary" onClick={() => navigateHandler(challenges.id)}>Подробнее</Button>
        </Card.Body>
      </Card>
      {/* cards 2 */}

      {/* final */}
    </>
  );
}
