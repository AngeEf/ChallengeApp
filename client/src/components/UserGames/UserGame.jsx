import React from 'react';
import Game from '../Game/Game';
import style from './style.module.css';

export default function UserGames() {
  return (
    <div className={style.userGame}>
      <Game />
    </div>
  );
}
