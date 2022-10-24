/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import multerSlice from '../../app/slices/multerSlice';

export default function Profile() {
  const [img, setImg] = useState();
  // const [avatar, setAvatar] = useState();
  // const user = useSelector((state) => state.user);
  const multer = useSelector((state) => state.multer);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(multerSlice);
  // });

  const imgChangeHandler = ((e) => {
    setImg(e.target.file);
  });

  const editFile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', img);
    console.log(data, 'data');
    fetch('http://localhost:3001/api/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((result) => console.log(result, 'its Work?!'))
    // console.log('its Work')

      .catch((err) => {
        console.log(err.message);
      });
  };

  const logo = 'https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg';
  console.log(img, 'imglog');
  return (
    <form onSubmit={editFile}>
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
        <div className={style.avatar_img}>
          {
    img
      ? <img className={style.avatar} src={`${img}`} alt="avatar" />
      : <img className={style.avatar} src={`${logo}`} alt="logo" />
  }
        </div>
        <input type="file" onChange={imgChangeHandler} />
        <button
          type="submit"
          className={`${style.profile__btn__refresh}`}
        >
          Обновить данные
        </button>
      </div>
    </form>
  );
}
