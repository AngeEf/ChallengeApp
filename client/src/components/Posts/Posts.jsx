import React from 'react';
import OnePost from '../OnePost.jsx/OnePost';
import style from './style.module.css';

export default function Posts() {
  return (
    <div>
      <div className={`${style.wrapper}`} />
      <div className={`${style.label}`}>
        <label className={`${style}`} htmlFor="hidden__input">
          <input id="hidden__input" className={`${style.checkbox}`} type="checkbox" />
          Добавить пост...
          <div className={`${style.hidden__wrapper}`}>
            <textarea className={`${style.posts__textarea}`} name="text" placeholder="Расскажите о ваших успехах..." />
            <div>
              <button className={`${style.posts__btn}`} type="submit">Добавить фото</button>
              <button className={`${style.posts__btn}`} type="submit">Опубликовать</button>
              <button className={`${style.posts__btn__red}`} type="submit">Задание</button>
            </div>
          </div>
        </label>
      </div>
      <OnePost />
    </div>
  );
}
