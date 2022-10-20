import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../app/slices/userSlice';

export default function SingUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <form className="mt-5" onSubmit={(e) => { dispatch(signupUser(e, Object.fromEntries(new FormData(e.target)))); navigate('/'); }}>
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
      <button type="submit" className="btn btn-primary">Зарегестрироваться</button>
    </form>
  );
}
