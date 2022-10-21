import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../app/slices/userSlice';
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
            <input type="text" className={`${style.navbar_input}`} />
            <button type="button" className={`${style.navbar_btn}`}>
              <i className="bi bi-search" />
            </button>
          </div>
          {/* <div className="input-group input-group-sm nav-input-group">
            <input
              type="text"
              id="nav-input"
              className="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className={style.btn_navbar}
              type="submit"
              id="button-addon2"
            >
              <i className="bi bi-search" />

            </button>
          </div> */}
        </li>

        {/* <li className={`${style.navbar_listItem}`}>
          <NavLink to="/" className={`${style.navbar_link}`} aria-current="page"><i className="bi bi-house-door-fill" /></NavLink>
        </li> */}
        {/* <li className={`${style.navbar_listItem}`}>
          <NavLink to="/signup" className={`${style.navbar_link}`}>Зарегистрироваться</NavLink>
        </li>
        <li className={`${style.navbar_listItem}`}>
          <NavLink to="/login" className={`${style.navbar_link}`}>Войти</NavLink>
        </li> */}
        {/* <li className={`${style.navbar_listItem}`}>
          <button type="button" className={`${style.btn_navbar}`}>Поиск</button>
        </li>
        <li className={`${style.navbar_listItem}`}>
          <input type="text" className={`${style.input_navbar}`} />
        </li> */}

        {/* <li className={`${style.navbar_listItem}`}>
          <NavLink to="/:id/profile" className={`${style.navbar_link}`} aria-current="page">Профиль</NavLink>
        </li>
        <li className={`${style.navbar_listItem}`}>
          <button onClick={() => { dispatch(logoutUser()); navigate('/'); }} className={`${style.btn_navbar}`} type="button">Выйти</button>
        </li> */}

        <li className={`${style.navbar_listItem} ${style.navbar_listItem__set}`}>
          <div className="d-flex navbar_set">
            <NavLink to="/" className={`${style.navbar_link}`} aria-current="page"><i className="bi bi-house-door-fill" /></NavLink>
            <Nav>
              <NavDropdown
                id="nav-dropdown"
                title="Личный кабинет"
                className={style.navbar_dropdown}
              // menuVariant="dark"
              >
                <NavDropdown.Item>
                  <NavLink to="/:id/profile" className={style.navbar_link} aria-current="page">Профиль</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/signup" className={style.navbar_link}>Зарегистрироваться</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/login" className={style.navbar_link}>Войти</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to="#" onClick={() => { dispatch(logoutUser()); }} className={style.navbar_link}>Выйти</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </li>
      </ul>

    </nav>
  );
}

// { /* <Dropdown>
// <Dropdown.Toggle id="dropdown-basic">
//   <i className="bi bi-person-fill" />
// </Dropdown.Toggle>
// <Dropdown.Menu>
//   <Dropdown.Item>

//     <NavLink to="/signup" className={style.navbar_link}>Зарегистрироваться</NavLink>
//   </Dropdown.Item>
//   <Dropdown.Item>

//     <NavLink to="/:id/profile" className={style.navbar_link} aria-current="page">Профиль</NavLink>
//   </Dropdown.Item>
//   <Dropdown.Item>

//     <NavLink to="/login" className={style.navbar_link}>Войти</NavLink>
//   </Dropdown.Item>
//   <Dropdown.Item>

//     <NavLink to="#" onClick={() => { dispatch(logoutUser()); }} className={style.navbar_link}>Выйти</NavLink>
//   </Dropdown.Item>
// </Dropdown.Menu>
// </Dropdown> */ }
