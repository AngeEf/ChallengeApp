import React from 'react';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <div className={style.category}>
      <div className={style.category_box}>
        {category.map(((el) => <Button className={style.category_type} key={el.link} onClick={() => navigate(`/category/${el.link}`)}>{el.title}</Button>))}
      </div>
    </div>
  );
}
