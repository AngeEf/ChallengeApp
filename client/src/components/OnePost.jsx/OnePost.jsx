import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../../app/slices/userSlice';
import style from './style.module.css';

export default function OnePost({ post }) {
  const avatar = 'https://cdn.vectorstock.com/i/preview-1x/82/55/anonymous-user-circle-icon-vector-18958255.jpg';
  const photo = 'https://www.shape.com/thmb/_OHvTvbgj3AhhJ7KC_BnG1-rDjs=/1244x1244/smart/filters:no_upscale():focal(621x0:623x2)/running-benefits-promo-8956358dae1c42ea96fc5f1a6b7fbdcd.jpg';

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  // console.log('AVATAR', post.User.image);

  return (
    <div className={`${style.post__wrapper}`}>
      <div className={style.author}>

        {/* <img className={style.author__avatar} src={post.User.image ? `http://localhost:3001/${post.User.image}` : avatar} alt="post" /> */}
        <img className={style.author__avatar} src={`http://localhost:3001/${post?.User?.image}` || avatar} alt="avatar" />

        <p className={style.author__name}>{post.User?.name}</p>
      </div>
      <p>
        {post?.content && post?.content}
      </p>

      {post.image !== '' && (<img className={`${style.img}`} alt="" src={`http://localhost:3001/${post.image}`} />)}

      {/* <div>
        <i className="bi bi-chat-left" />
        <input className={`${style.post__input}`} name="text" placeholder="Оставить комментарий..." />
      </div> */}
    </div>
  );
}
