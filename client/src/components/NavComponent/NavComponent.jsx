import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUserAsync } from '../../app/slices/userSlice';
import style from './style.module.css';

export default function MyNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <nav className={`${style.navbar}`}>
      <ul className={`${style.navbar_list}`}>
        <li className={`${style.navbar_listItem}`}>
          <span className={`${style.navbar_logo}`}>
            <i className="bi bi-chat-square-text-fill ms-4 me-2" />
            Challenge
          </span>
        </li>
        <li className={style.navbar_listItem}>
          <div className={style.navbar_group}>
            <input type="text" className={`${style.navbar_input}`} placeholder="Поиск" />
            <button type="button" className={`${style.navbar_btn}`}>
              <i className="bi bi-search mx-1" />
            </button>
          </div>

        </li>

        <li className={`${style.navbar_listItem} ${style.navbar_listItem__set}`}>
          <div className="d-flex navbar_set">
            <NavLink to="/" className={`${style.navbar_link}`} aria-current="page"><i className="bi bi-house-door-fill" /></NavLink>
            <NavLink to="/category/challenge" className={`${style.navbar_link}`} aria-current="page"><i className="bi bi-ui-checks-grid" /></NavLink>
            <NavLink to="/category/community" className={`${style.navbar_link}`} aria-current="page" style={{ transform: 'scale(1.2)' }}><i className="bi bi-people-fill" /></NavLink>
            {user.id ? (
              <NavLink to={`/progress/${user.id}`} className={style.navbar_link} aria-current="page"><i className="bi bi-trophy-fill" /></NavLink>
            ) : (
              <NavLink to="/login" className={style.navbar_link} aria-current="page"><i className="bi bi-trophy-fill" /></NavLink>
            )}

            <Nav>
              <NavDropdown
                id="nav-dropdown"
                title="Личный кабинет"
                className={style.navbar_dropdown}
              // menuVariant="dark"
              >
                <NavDropdown.Item>
                  <NavLink to={`/profile/${user.id}`} className={style.navbar_link} aria-current="page">Профиль</NavLink>
                </NavDropdown.Item>
                {!user.id && (
                  <NavDropdown.Item>
                    <NavLink to="/signup" className={style.navbar_link}>Зарегистрироваться</NavLink>
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item>
                  <NavLink to="/login" className={style.navbar_link}>Войти</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to="#" onClick={() => { dispatch(logoutUserAsync()); }} className={style.navbar_link}>Выйти</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </li>
      </ul>

    </nav>
  );
}
