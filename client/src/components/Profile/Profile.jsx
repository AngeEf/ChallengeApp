import React from 'react';
import style from './style.module.css';

export default function Profile() {
  const img = 'https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg';
  return (
    <div className={style.wrapper}>
      <div className={style.profile__name__wrapper}>
        <label htmlFor="exampleInputName" className={style.profile__name__label}>
          Имя
          <input
            name="name"
            className={style.profile__name__input}
            id="exampleInputName"
          />
        </label>
      </div>
      <div className="mb-3">
        <img className={style.avatar} src={img} alt="" />
        <button type="submit" className={style.profile__btn}>Выбрать фото</button>
      </div>
      <button type="submit" className={`${style.profile__btn__refresh}`}>Обновить данные</button>
    </div>
  );
}
