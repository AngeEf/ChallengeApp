import React from 'react';
import style from './style.module.css';

export default function OnePost({ post }) {
  const avatar = 'https://www.byrdie.com/thmb/Uol_SXGtjqYMeF_G9tC633Gt0vo=/2730x2730/filters:fill(auto,1)/GettyImages-5043112621-8d6042abae6144f39a95fc2f5defa28c.jpg';
  const photo = 'https://www.shape.com/thmb/_OHvTvbgj3AhhJ7KC_BnG1-rDjs=/1244x1244/smart/filters:no_upscale():focal(621x0:623x2)/running-benefits-promo-8956358dae1c42ea96fc5f1a6b7fbdcd.jpg';

  return (
    <div className={`${style.post__wrapper}`}>
      <div className={style.author}>
        <img className={style.author__avatar} src={post.User.image ? `http://localhost:3001/${post.User.image}` : avatar} alt="post" />
        <p className={style.author__name}>{post.User.name}</p>
      </div>
      <p>
        {post.content}
      </p>
      {post.image?.includes('http') && (
        <div className={`${style.img__wrapper}`}>
          <img className={`${style.img}`} alt="comm_photo" src={post.image} />
        </div>
      )}
      <div>
        <i className="bi bi-chat-left" />
        <input className={`${style.post__input}`} name="text" placeholder="Оставить комментарий..." />
      </div>
    </div>
  );
}
