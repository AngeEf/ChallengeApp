import React from 'react';
import CardItem from '../CardItem/CardItem';
import style from './style.module.css';

export default function SectionView() {
  return (
    <div className={style.section}>
      <CardItem />
    </div>
  );
}
