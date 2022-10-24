import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

export default function Info() {
  const navigate = useNavigate();

  return (
    <div className={style.info}>
      <div className={style.info_img}>
        <img src="https://telegram.org.ru/uploads/posts/2020-08/1598264649_w6vzlb5puak.jpg" alt="challenge" className={style.info_photo} />
      </div>
      <div>
        <h1 className={style.info_title}>Some title</h1>
        <p className={style.info_title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sed blanditiis vero, nemo harum.</p>
        <ButtonGroup className={style.info_group}>
          <Button onClick={() => navigate('/signup')} className={style.info_btn}>Присоедениться</Button>
          <Button onClick={() => navigate('/login')} className={style.info_btn}>Войти</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
