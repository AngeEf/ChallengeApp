import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import { getChallenges, getOneCommunity } from '../../app/slices/challengeSlice';

export default function CardItemChallenge() {
  const challenges = useSelector((state) => state.challenges);

  // const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChallenges());
  }, []);

  const navigateHandler = (id) => navigate(`/challenge/${id}`);
  return (
    <>
      {challenges?.map((el) => (
        <Card className={style.card}>
          <div className={style.cart_img}>
            <Card.Img className={style.cart_photo} variant="top" src={el.image} />
          </div>
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>{el.subtitle}</Card.Text>
            <Button variant="primary" onClick={() => navigateHandler(el.id)}>Подробнее</Button>
          </Card.Body>
        </Card>
      ))}
      {/* cards 2 */}

      {/* final */}
    </>
  );
}
