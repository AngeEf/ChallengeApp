import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../app/slices/userSlice';

export default function MyNavbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light test" style={{ backgroundColor: '#e3f2fd', marginBottom: '2rem' }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link" style={{ marginRight: '2rem' }} aria-current="page">Главная</NavLink>
            <NavLink to="/signup" className="nav-link" style={{ marginRight: '2rem' }}>Зарегистрироваться</NavLink>
            <NavLink to="/login" className="nav-link" style={{ marginRight: '2rem' }}>Войти</NavLink>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Поиск</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <button onClick={() => dispatch(logoutUser())} style={{ marginLeft: '2rem' }} type="button" className="btn btn-outline-primary">Выйти</button>
            <NavLink to="/:id/profile" className="nav-link" style={{ marginRight: '2rem' }} aria-current="page">Профиль</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
