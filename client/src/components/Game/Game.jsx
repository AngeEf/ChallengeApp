import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

export default function Game() {
  const navigate = useNavigate();
  return (
    <div className={style.main}>
      <div className={style.container_grid}>
        <div className={style.grid}>
          <div className={`${style.grid_item} ${style.grid_item_1}`} />
          <div className={`${style.grid_item} ${style.grid_item_2}`} onClick={() => navigate('/category/writing')}>Письмо</div>
          <div className={`${style.grid_item} ${style.grid_item_3}`} onClick={() => navigate('/category/lifestyle')}>Лайфстайл</div>
          <div className={`${style.grid_item} ${style.grid_item_4}`} onClick={() => navigate('/category/food')}>Питание</div>
          <div className={`${style.grid_item} ${style.grid_item_5}`} onClick={() => navigate('/category/art')}>Искусство</div>
          <div className={`${style.grid_item} ${style.grid_item_6}`} onClick={() => navigate('/category/sport')}>Спорт</div>
          <div className={`${style.grid_item} ${style.grid_item_7}`} onClick={() => navigate('/category/healty')}>Здоровье</div>
          <div className={`${style.grid_item} ${style.grid_item_8}`}>Сделай свою жизнь квестом</div>
          <div className={`${style.grid_item} ${style.grid_item_9}`} onClick={() => navigate('/category/photography')}>Фотография</div>
          <div className={`${style.grid_item} ${style.grid_item_10}`}>Делись своими успехами</div>
          <div className={`${style.grid_item} ${style.grid_item_11}`} onClick={() => navigate('/category/productivity')}>Продуктивность</div>
        </div>
      </div>
    </div>
  );
}
