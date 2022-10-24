import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { writeAdminPost } from '../../app/slices/adminPostSlice';
import { getAdmin } from '../../app/slices/adminSlice';
import { createAdminPost, createPost, getPosts } from '../../app/slices/postSlice';
import { checkAuth } from '../../app/slices/userSlice';
import OnePost from '../OnePost.jsx/OnePost';
import style from './style.module.css';

export default function Posts({ community }) {
  const background = 'https://i.pinimg.com/564x/79/d3/66/79d3667409ad6ee99cfc400bf2a76da1.jpg';
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { id } = useParams();
  const adminPost = useSelector((state) => state.adminPost);
  const [input, setInput] = useState('');
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.admin);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  useEffect(() => {
    dispatch(getAdmin(id));
  }, []);

  useEffect(() => {
    dispatch(getPosts(id));
  }, []);

  useEffect(() => {
    dispatch(writeAdminPost(id));
  }, []);

  const inputHandler = (e) => {
    setInput(() => (e.target.value));
  };

  const taskHandler = () => {
    dispatch(createAdminPost(id, input));
  };

  const postHandler = (() => {
    dispatch(createPost(id, input));
    navigate(`${location.search}`);
  });

  return (
    <div>
      <div className={`${style.wrapper}`} />
      <div className={`${style.label}`}>

        <label className={`${style}`} htmlFor="hidden__input">
          <input id="hidden__input" className={`${style.checkbox}`} type="checkbox" />
          Добавить пост...
          <form className={style.hidden__wrapper}>
            <textarea className={style.posts__textarea} value={input} onChange={inputHandler} name="content" placeholder="Расскажите о ваших успехах..." />
            <div>
              <button className={style.posts__btn} type="submit">Добавить фото</button>
              <button onClick={() => postHandler()} className={style.posts__btn} type="submit">Опубликовать</button>
              {admin?.admin_id === user?.id ? (<button onClick={() => taskHandler()} className={style.posts__btn__red} type="submit">Задание</button>) : ''}
            </div>
          </form>
        </label>
      </div>
      <div className={`${style.admin__post}`}>
        <div className={`${style.admin__postHeader}`}>
          <i className={`${style.admin__postIcon} bi bi-pin-angle`} />
          <img className={style.admin__postAvatar} src={background} alt="" />
          <p className={`${style.admin__postTitle}`}>{`Задание для участников ${community.title}`}</p>
        </div>
        <div className={`${style.admin__postText}`}><p>{adminPost[0]?.content}</p></div>
      </div>
      {posts?.map((el) => <OnePost post={el} key={el.id} />)}
    </div>
  );
}
