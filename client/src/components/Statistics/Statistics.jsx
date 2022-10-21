import React from 'react';
import style from './style.module.css';

export default function Statistics() {
  return (
    <div className={`${style.wrapper}`}>
      <h5>Статистика</h5>
      <span>Количество участников: 57670</span>
      <span>Категория сообщества: спорт</span>
      <span>Было основано: 10.10.2022</span>
    </div>
  );
}
