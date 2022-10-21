import React from 'react';
import style from './style.module.css';

const background = 'https://i.pinimg.com/564x/79/d3/66/79d3667409ad6ee99cfc400bf2a76da1.jpg';
export default function TaskFromCommunity() {
  return (
    <div className={`${style.admin__post}`}>
      <div className={`${style.admin__postHeader}`}>
        <i className={`${style.admin__postIcon} bi bi-pin-angle`} />
        <img className={style.admin__postAvatar} src={background} alt="" />
        <p className={`${style.admin__postTitle}`}>Задание дня</p>
      </div>
      <div className={`${style.admin__postText}`}>
        Дождь, ветер и температура на градуснике снижают мотивацию тренироваться и пробуждают лень. Но стоит заставить себя выйти на пробежку и преодолеть первые километры, — и ситуация уже не кажется столь драматичной.
      </div>
    </div>
    // <div>TaskFromCommunity</div>
  );
}
