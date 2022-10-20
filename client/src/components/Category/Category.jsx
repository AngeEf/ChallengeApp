import React from 'react';
import { Button } from 'react-bootstrap';
import style from './style.module.css';

const category = [
  { link: 'sport', title: 'Спорт' },
  { link: 'healty', title: 'Здоровье' },
  { link: 'food', title: 'Питание' },
  { link: 'lifestyle', title: 'Лайфстайл' },
  { link: 'photography', title: 'Фотография' },
  { link: 'art', title: 'Искусство' },
  { link: 'writing', title: 'Письмо' },
  { link: 'productivity', title: 'Продуктивность' }];

export default function Category() {
  return (
    <div className={style.category}>
      <div className={style.category_box}>
        {category.map(((el) => <Button className={style.category_type} key={el.link} to={`/${el.link}`}>{el.title}</Button>))}
      </div>
    </div>
  );
}
