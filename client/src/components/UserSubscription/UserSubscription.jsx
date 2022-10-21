import React from 'react';
import TaskFromCommunity from '../TaskFromCommunity/TaskFromCommunity';
import style from './style.module.css';

export default function UserSubscription() {
  return (
    <div className={style.userSubscription}>
      <TaskFromCommunity />
    </div>
  );
}
