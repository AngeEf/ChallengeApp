import React from 'react';
import style from './style.module.css';

const array = [];
export default function Game() {
  return (
    <div className={style.game}>
      <h4 className={style.game_title}>Challenge name</h4>
      <p className={style.game_data}>Start: 15/10/2022</p>
      <div className={style.game_check}>
        <div className={style.game_item}>1</div>
      </div>
      <div>
        <span className={style.game_data}>Progress: 2/30</span>
        <span className={style.game_data}>Deadline: 14/11/2022</span>
      </div>
    </div>
  );
}
