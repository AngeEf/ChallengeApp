import React from 'react';
import { Link } from 'react-router-dom';
import UserGames from '../UserGames/UserGame';
import UserSubscription from '../UserSubscription/UserSubscription';
import style from './style.module.css';

const category = [
  { link: 'sport', title: 'Спорт' },
  { link: 'healty', title: 'Здоровье' },
  { link: 'food', title: 'Питание' },
  { link: 'lifestyle', title: 'Лайфстайл' },
  { link: 'photography', title: 'Фотография' },
  { link: 'art', title: 'Искусство' },
  { link: 'writing', title: 'Письмо' },
  { link: 'productivity', title: 'Продуктивность' },
];
export default function Progress() {
  return (
    <>
      <div className={style.progress_data}>
        <div>
          {category.map((el) => <Link to="/api/#" className="main-link me-3" key={el.link}>{el.title}</Link>)}
        </div>
      </div>
      <div className={style.progress}>
        <UserGames />
        <UserSubscription />
      </div>
    </>
  );
}
