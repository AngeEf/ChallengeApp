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

  useEffect(() => {
    dispatch(allActiveGameOfUserAsync());
    // parseObj();
  }, []);

  const getDate = (dateCreate) => (moment(dateCreate).format(format));
  const getDeadline = (dateCreate) => (moment(dateCreate).add(30, 'days').format(format));
  // const compairDate = (dateCreate) => {
  //   const deadline = moment('2023-10-25T10:58:22+03:00').format();
  //   const now = moment().format();
  //   if (deadline > now) return true;
  //   return false;
  // };

  const checkHandler = (num, game) => {
    const update = JSON.parse(game.progress);
    update[num] = true;
    dispatch(changeProgressAsync(update, game.id));
  };
  return (
    <div className={style.userGame}>
      {userGame?.map((elem) => (
        <div className={style.game} key={elem.id}>
          <h4 className={style.game_title}>{elem?.Challenge?.title}</h4>
          <p className={style.game_data}>
            {`Start: ${getDate(elem?.createdAt)}`}
          </p>
          <div className={style.game_check}>
            {array.map((el) => {
              const parseProgress = JSON.parse(elem?.progress || '{}');
              return (
                <button
                  style={{
                    backgroundColor: (parseProgress[el] === true) ? '#f4d2bc' : 'white',
                  }}
                  disabled={elem?.status !== true}
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
            <span className={style.game_data}>{(elem?.status) ? ('In Progress') : ('Completed')}</span>
            <span className={style.game_data}>{`Deadline: ${getDeadline(elem.createdAt)}`}</span>
          </div>
        </div>
      ))}

    </div>
  );
}
