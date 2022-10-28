import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../app/slices/userSlice';
import style from './style.module.css';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <form
        className={style.form}
        onSubmit={(e) => { dispatch(loginUser(e, Object.fromEntries(new FormData(e.target)))); navigate('/'); }}
      >
        <div className="mb-3">
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
        <div className="mb-3">
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
        <button type="submit" className="btn-main align-self-center mt-5">Войти</button>
      </form>
    </div>
  );
}
