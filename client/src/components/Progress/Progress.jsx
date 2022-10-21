import React from 'react';
import UserGames from '../UserGames/UserGame';
import UserSubscription from '../UserSubscription/UserSubscription';
import style from './style.module.css';

export default function Progress() {
  return (
    <div className={style.container}>
      <UserGames />
      <UserSubscription />
    </div>
  );
}
