import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './style.module.css';
import { logoutUser } from '../../app/slices/userSlice';

export default function MyNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
<<<<<<< HEAD
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
=======
    <div className={`${style.container}`}>
      <nav className={`${style.navbar}`}>
        <ul className={`${style.navbar__list}`}>
          <li className={`${style.list__item}`}>
            <span className={`${style.logo}`}>
              The Challenge
            </span>
          </li>
          <li className={`${style.list__item}`}>
            <NavLink to="/" className={`${style.navbar__link}`} aria-current="page">Главная</NavLink>
          </li>
          <li className={`${style.list__item}`}>
            <NavLink to="/signup" className={`${style.navbar__link}`}>Зарегистрироваться</NavLink>
          </li>
          <li className={`${style.list__item}`}>
            <NavLink to="/login" className={`${style.navbar__link}`}>Войти</NavLink>
          </li>
          <li className={`${style.list__item}`}>
            <button type="button" className={`${style.btn__navbar}`}>Поиск</button>
          </li>
          <li className={`${style.list__item}`}>
            <input type="text" className={`${style.input__navbar}`} />
          </li>

          <li className={`${style.list__item}`}>
            <NavLink to="/:id/profile" className={`${style.navbar__link}`} aria-current="page">Профиль</NavLink>
          </li>
          <li className={`${style.list__item}`}>
            <button onClick={() => { dispatch(logoutUser()); navigate('/'); }} className={`${style.btn__navbar}`} type="button">Выйти</button>
          </li>
        </ul>
      </nav>
    </div>
>>>>>>> main
  );
}
