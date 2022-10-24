import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allActiveGameOfUserAsync } from '../../app/slices/userGameSlice';
import style from './style.module.css';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
export default function Game() {
  // const user = useSelector((state) => state.user);
  // const userGame = useSelector((state) => state.userGame);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(allActiveGameOfUserAsync(user.id));
  // }, []);

  // const date1 = new Date(userGame[0].createdAt);
  // console.log(date1);
  // console.log(date1.toLocaleDateString());
  // console.log(userGame);
  return (
    <div className={style.game}>
      <h4 className={style.game_title}>Challenge name</h4>
      <p className={style.game_data}>Start: 15/10/2022</p>
      <div className={style.game_check}>
        {array.map((el) => <button type="button" className={style.game_item} key={el}>{el}</button>)}
      </div>
      <div className={style.game_box}>
        <span className={style.game_data}>Progress: 2/30</span>
        <span className={style.game_data}>Deadline: 14/11/2022</span>
      </div>
    </div>
  );
}
