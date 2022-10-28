import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../app/slices/userSlice';
import style from './style.module.css';

export default function SingUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [img, setImg] = useState('');

  return (
    <div className={style.wrapper}>
      <form
        className={style.form}
        onSubmit={(e) => {
          dispatch(signupUser(e, new FormData(e.target)));
          navigate('/');
        }}
      >
        <div>
          <label htmlFor="exampleInputEmail1" className={`${style.form_title}`}>
            Имя
            <input
              name="name"
              type="text"
              className={`${style.form_control}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div>
          <label htmlFor="exampleInputEmail1" className={`${style.form_title}`}>
            Email
            <input
              name="email"
              type="email"
              className={`${style.form_control}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div>
          <label htmlFor="exampleInputPassword1" className={`${style.form_title}`}>
            Пароль
            <input
              name="password"
              type="password"
              className={`${style.form_control}`}
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <div>
          <label htmlFor="exampleInputPassword1" className={`${style.form_title}`}>
            <input
              name="avatar"
              // onChange={(e) => setImg(e.target.files[0])}
              type="file"
              className={`${style.form_img}`}
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <button type="submit" className="btn-main align-self-center mt-5">Зарегестрироваться</button>
      </form>
    </div>
  );
}
