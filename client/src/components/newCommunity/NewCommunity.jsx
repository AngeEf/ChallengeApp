import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { setNewCommunity } from '../../app/slices/communitySlice';
import style from './style.module.css';

export default function NewCommunity() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e, input) => {
    e.preventDefault();
    dispatch(setNewCommunity(input));
    navigate('/category/community');
  };
  return (
    <div className={style.wrapper}>
      <form
        className={style.form}
        onSubmit={(e) => {
          submitHandler(e, Object.fromEntries(new FormData(e.target)));
        }}
      >
        <label htmlFor="title">Название сообщества:</label>
        <input className={style.input} type="text" id="title" name="title" />
        <label htmlFor="subtitle">Краткое описание:</label>
        <input className={style.input} type="text" id="subtitle" name="subtitle" />
        <label htmlFor="category">Категория:</label>
        <select className={style.input} id="category" name="category">
          <option value="lifestyle">Лайфстайл</option>
          <option value="sport">Спорт</option>
          <option value="health">Здоровье</option>
          <option value="food">Питание</option>
          <option value="photography">Фотография</option>
          <option value="art">Искусство</option>
          <option value="writing">Письмо</option>
          <option value="productivity">Продуктивность</option>
        </select>
        <label htmlFor="description">Описание:</label>
        <textarea className={style.input} type="textarea" id="description" name="description" />
        <button className={style.newCommunity__btn} type="submit">
          Создать сообщество
        </button>
      </form>
    </div>
  );
}
