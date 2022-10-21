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
      <form onSubmit={(e) => { dispatch(loginUser(e, Object.fromEntries(new FormData(e.target)))); navigate('/'); }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </div>
  );
}
