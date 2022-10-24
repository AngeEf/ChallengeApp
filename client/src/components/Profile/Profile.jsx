/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.css';
import { editFile, getMulters } from '../../app/slices/multerSlice';

export default function Profile() {
  const [img, setImg] = useState();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    axios('/api/takepath')
      .then((data) => setImg(data.data.image));
  }, []);

  const imgChangeHandler = ((e) => {
    console.log(e.target.files[0], 'e.target');
    setImg(e.target.files[0]);
  });

  // const editFile = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.append('avatar', img);

  //   axios.post(`http://localhost:3001/api/upload/${user.id}`, data, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     withCredentials: true,
  //   })
  //     .then((res) => dispatch(getMulters(user.id)));
  // };

  console.log(img, 'imglog');
  return (
    <form onSubmit={() => dispatch(editFile(img, user.id)).navigate(`/profile/${user.id}`)}>
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
          <img className={style.avatar} src={`http://localhost:3001/${img}`} alt="avatar" />
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
