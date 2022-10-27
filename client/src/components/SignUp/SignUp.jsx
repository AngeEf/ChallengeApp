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
      <form onSubmit={(e) => {
        dispatch(signupUser(e, new FormData(e.target)));
        navigate('/');
      }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Имя
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
            <input
              name="avatar"
              // onChange={(e) => setImg(e.target.files[0])}
              type="file"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Зарегестрироваться</button>
      </form>
    </div>
  );
}
