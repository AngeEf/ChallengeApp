import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneChallenge } from '../../app/slices/challengeSlice';
import { allActiveGameAsync, createNewGameAsync } from '../../app/slices/gameSlice';
import { oneUserGameAsync } from '../../app/slices/userGameSlice';
import style from './style.module.css';

export default function ChallengeView() {
  const user = useSelector((state) => state.user);
  const challenges = useSelector((state) => state.challenges);
  const game = useSelector((state) => state.game);
  const userGame = useSelector((state) => state.userGame);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // отображение челленжа по id
  useEffect(() => {
    dispatch(getOneChallenge(id));
  }, []);

  // кол-во участников
  useEffect(() => {
    dispatch(allActiveGameAsync(id));
  }, []);

  // объект есть если юзер участвует в челленже
  useEffect(() => {
    if (user.id) {
      dispatch(oneUserGameAsync(id));
    }
  }, [user.id]);

  const startGameHandker = (challengeId) => {
    dispatch(createNewGameAsync(challengeId));
  };

  return (
    <div className={style.challenge}>
      <div className={style.details}>
        <div className={style.details_content}>
          <div className="ms-4">
            <h2 className={style.details_title}>{challenges.title}</h2>
            <h4 className={style.details_subtitle}>{challenges.subtitle}</h4>
          </div>

          <div className={style.details_data}>
            <div>
              <span className="ms-0 me-3">
                Участвуют сейчас:
                {' '}
                {game.length}
              </span>
              <span className="ms-0">
                {'Сложность: '}
                <i className="bi bi-star-fill mx-1" style={{ color: '#F4D2BC' }} />
                <i className="bi bi-star-fill mx-1" style={{ color: '#F4D2BC' }} />
                <i className="bi bi-star-fill mx-1" style={{ color: '#F4D2BC' }} />
              </span>
            </div>
            {user.id && (userGame.length > 0) ? (
              <Button type="button" disabled>Уже участвуете</Button>
            ) : (user.id) ? (
              <Button type="button" onClick={() => { startGameHandker(challenges.id); navigate(`/challenge/${id}`); }}>Принять участие</Button>
            ) : (
              <Button type="button" onClick={() => navigate('/login')}>Принять участие</Button>
            )}
          </div>
          <p>{challenges.description}</p>
        </div>
      </div>
      <div className={style.image}>
        <div className={style.image_box}>
          <img className={style.image_photo} src={`http://localhost:3001/${challenges.image}`} alt="challenge1" />
        </div>
      </div>
    </div>
  );
}
