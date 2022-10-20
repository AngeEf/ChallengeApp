import React from 'react';
import Info from '../Info/Info';
import Category from '../Category/Category';
import style from './style.module.css';

export default function MainPage() {
  return (
    <div className={style.main}>
      <Info />
      <Category />
    </div>
  );
}
