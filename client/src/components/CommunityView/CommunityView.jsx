import React from 'react';
import { Form, useNavigate } from 'react-router-dom';
import Members from '../Members/Members';
import Posts from '../Posts/Posts';
import Statistics from '../Statistics/Statistics';
import style from './style.module.css';

export default function CommunityView() {
  const background = 'https://i.pinimg.com/564x/79/d3/66/79d3667409ad6ee99cfc400bf2a76da1.jpg';
  const navigate = useNavigate();
  return (
    <div className={`${style.wrapper}`}>
      <div>
        <img className={`${style.img}`} src={background} alt="background" />
        <div className={`${style.community__wrapper}`}>
          <h2 className={`${style.community__title}`}>Беговое сообщество</h2>
          <button className={`${style.community__btn}`} type="submit" onClick={() => navigate('/login')}>Присоединиться</button>
        </div>
        <p className={`${style.community__desc}`}>
          Группа создана для тех, кто любит спорт, занимается бегом, ведёт активный образ жизни, не останавливается на достигнутом и все время стремится к новым победам над собой!
          В группе ежедневно обновляются посты по мотивационно-спортивной, научно- спортивной, развлекательно-спортивной тематике и другие материалы.
          С развитием группы участников ждет еще много интересного!!!

        </p>
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
        <div className={`${style.posts__wrapper}`}>
          <Posts />
        </div>
      </div>
      <div className={`${style.community__right}`}>
        <Members />
        <Statistics />
      </div>
    </div>
  );
}
