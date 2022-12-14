import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { setNewCommunity } from '../../app/slices/communitySlice';
import userSlice, { checkAuth } from '../../app/slices/userSlice';
import style from './style.module.css';

export default function NewCommunity() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [img, setImg] = useState();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  const imgChangeHandler = ((e) => {
    setImg(e.target.files[0]);
  });

  const newCommunity = (e, input) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', img);
    data.append('title', input.title);
    data.append('subtitle', input.subtitle);
    data.append('category', input.category);
    data.append('description', input.description);
    axios.post('http://localhost:3001/api/community/communities', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
  };

  console.log('USER', user);

  return (
    <div className={style.wrapper}>
      <form
        className={style.form}
        onSubmit={(e) => {
          newCommunity(e, Object.fromEntries(new FormData(e.target))); navigate('/category/community');
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
        <input type="file" onChange={imgChangeHandler} />

        <button className={style.newCommunity__btn} type="submit">
          Создать сообщество
        </button>

      </form>
    </div>
  );
}
