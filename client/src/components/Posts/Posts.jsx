import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createPost, getPosts } from '../../app/slices/postSlice';
import OnePost from '../OnePost.jsx/OnePost';
import style from './style.module.css';

export default function Posts() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(() => (e.target.value));
  };

  useEffect(() => {
    dispatch(getPosts(id));
  }, []);

  const postHandler = (() => {
    dispatch(createPost(id, input));
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
              <button onClick={postHandler} className={style.posts__btn} type="submit">Опубликовать</button>
              <button className={style.posts__btn__red} type="submit">Задание</button>
            </div>
          </form>
        </label>
      </div>
      {posts?.map((el) => <OnePost post={el} key={el.id} />)}
    </div>
  );
}
