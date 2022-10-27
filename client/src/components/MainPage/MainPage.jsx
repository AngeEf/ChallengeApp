import React from 'react';
import Game from '../Game/Game';
import style from './style.module.css';

export default function MainPage() {
  return (
    <div className={style.main}>
      <Game />
    </div>
  );
}
