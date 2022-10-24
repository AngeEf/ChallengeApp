import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { allActiveGameOfUserAsync, changeProgressAsync } from '../../app/slices/userGameSlice';
// import Game from '../Game/Game';
import style from './style.module.css';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
export default function UserGames() {
  const user = useSelector((state) => state.user);
  const userGame = useSelector((state) => state.userGame);

  const dispatch = useDispatch();
  const format = 'DD.MM.YYYY';
  // const [parseProgress, setParseProgress] = [];

  // const parseObj = () => {
  //   setParseProgress(userGame?.map((el) => JSON.parse(el.progress)));
  //   console.log(parseProgress);
  // };
  useEffect(() => {
    dispatch(allActiveGameOfUserAsync());
    // parseObj();
  }, []);
  const getDate = (start) => (moment(start).format(format));
  const getDeadline = (start) => (moment(start).add(30, 'days').format(format));

  const checkHandler = (num, game) => {
    // console.log(typeof num, num);
    // console.log({ game });
    // console.log('!!!!!!!!!!!', JSON.parse(obj));
    const update = JSON.parse(game.progress);
    update[num] = true;
    dispatch(changeProgressAsync(update, game.id));
  };
  return (
    <div className={style.userGame}>
      {userGame?.map((elem) => (
        <div className={style.game} key={elem.id}>
          <h4 className={style.game_title}>{elem.challenge_id}</h4>
          <p className={style.game_data}>
            {`Start: ${getDate(elem.createdAt)}`}
          </p>
          <div className={style.game_check}>
            {array.map((el) => {
              const parseProgress = JSON.parse(elem.progress || '{}');
              return (
                <button
                  style={{
                    backgroundColor: (parseProgress[el] === true) ? 'red' : 'blue',
                  }}
                  // {(JSON.parse(elem.progress).el === true )? (
                  //   style={{ backgroundColor: 'blue' }}
                  // ): (
                  //     style={{ backgroundColor: 'red' }}
                  //   )}
                  // style={{ backgroundColor: 'red' }}
                  type="button"
                  className={style.game_item}
                  key={el}
                  onClick={() => checkHandler(el, elem)}
                >
                  {el}
                </button>
              );
            })}
          </div>
          <div className={style.game_box}>
            <span className={style.game_data}>{elem.id}</span>
            <span className={style.game_data}>{`Deadline: ${getDeadline(elem.createdAt)}`}</span>
          </div>
        </div>
      ))}

    </div>
  );
}
