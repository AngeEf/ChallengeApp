/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';
import { editFile } from '../../app/slices/multerSlice';

export default function Profile() {
  const image = useSelector((state) => state.multer);
  const user = useSelector((state) => state.user);
  const [img, setImg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(image, 'imaaaffff');
  console.log(user, 'useeeeeeeer');

  useEffect(() => {
    axios('/api/takepath')
      .then((data) => setImg(data?.data.image));
  }, [image]);
  console.log(img, 'profile img');
  const imgChangeHandler = ((e) => {
    console.log(e.target.files[0], '-------00000000-------');
    setImg(e.target.files[0]);
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(editFile(img, user.id, Object.fromEntries(new FormData(e.target))));
      navigate('/');
    }}
    >
      <div className={style.wrapper}>
        <div className={style.profile__name__wrapper}>
          <label htmlFor="exampleInputName" className={style.profile__name__label}>
            Имя
            <input
              name="name"
              className={style.profile__name__input}
              id="exampleInputName"
              placeholder={image?.name}
            />
          </label>
        </div>
        <div className={style.avatar_img}>
          {/* <img className={style.avatar} src={`http://localhost:3001/${img}`} alt="avatar" /> */}
          {/* <img className={style.avatar} src={user?.image ? `http://localhost:3001/${user?.image}` : image} alt="avatar" /> */}
          {img ? (
            <img className={style.avatar} src={`http://localhost:3001/${img}`} alt={`http://localhost:3001/${image?.image}`} />
          ) : (
            <img className={style.avatar} src="https://vk.com/images/camera_400.png" alt="avatar" />
          )}
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
