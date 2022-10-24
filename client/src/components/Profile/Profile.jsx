/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './style.module.css';
import { getMulters } from '../../app/slices/multerSlice';

export default function Profile() {
  const [img, setImg] = useState();
  const { id } = useParams();
  const multer = useSelector((state) => state.multer);
  const dispatch = useDispatch();
  console.log(multer);

  useEffect(() => {
    axios(`/api/findname/${id}`);
  });

  // useEffect(() => {
  //   fetch('/api/takephoto/:id');
  // });

  const imgChangeHandler = ((e) => {
    console.log(e.target.files[0], 'e.target');
    setImg(e.target.files[0]);
  });

  const editFile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', img);
    console.log(img, 'dataimage');

    axios.post('http://localhost:3001/api/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
      .then((res) => dispatch(res));
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
      ? <img className={style.avatar} src={`http://localhost3000/api/takephoto/${img}`} alt="avatar" />
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
