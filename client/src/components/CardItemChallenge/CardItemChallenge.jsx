import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import { getChallenges } from '../../app/slices/challengeSlice';

export default function CardItemChallenge() {
  const image = 'https://i.pinimg.com/564x/6e/13/14/6e13140258774878ec96d2c147492ab7.jpg';
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
      {Array.isArray(challenges) && challenges?.map((el) => (
        <Card className={style.card} key={el.id} style={{ border: 'none' }}>
          <div className={style.cart_img}>
            {/* <Card.Img className={style.cart_photo} variant="top" src={el.image} /> */}
            <Card.Img style={{ border: 'none' }} className={style.cart_photo} variant="top" src={el?.image ? `http://localhost:3001/${el?.image}` : image} />
          </div>
          <Card.Body className={style.card__body}>
            <Card.Title>{el?.title}</Card.Title>
            <Card.Text>{el?.subtitle}</Card.Text>
            <button type="button" className="btn-main align-self-center mt-2" onClick={() => navigateHandler(el.id)}>Подробнее</button>
          </Card.Body>
        </Card>
      ))}
      {/* cards 2 */}

      {/* final */}
    </>
  );
}
