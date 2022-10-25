import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { writeAdminPost } from '../../app/slices/adminPostSlice';
import { getAdmin } from '../../app/slices/adminSlice';
import { createAdminPost, getPosts } from '../../app/slices/postSlice';
import { checkAuth } from '../../app/slices/userSlice';
import { checkMember } from '../../app/slices/checkMemberSlice';
import OnePost from '../OnePost.jsx/OnePost';
import style from './style.module.css';
import checkAdminSlice, { checkAdmin } from '../../app/slices/checkAdminSlice';

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
  const isMember = useSelector((state) => state.checkMember);
  const isAdmin = useSelector((state) => state.checkAdmin);
  const [img, setImg] = useState();

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

  useEffect(() => {
    checkAdmin(id);
  }, []);

  useEffect(() => {
    dispatch(checkMember(id));
  }, []);

  const inputHandler = (e) => {
    setInput(() => (e.target.value));
  };

  const taskHandler = () => {
    dispatch(createAdminPost(id, input, img));
  };

  const imgChangeHandler = ((e) => {
    setImg(e.target.files[0]);
  });

  const editFile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', img);
    data.append('input', input);
    data.append('id', id);
    axios.post(`http://localhost:3001/api/post/${id}/posts/new`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
  };

  const editAdminFile = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', img);
    data.append('input', input);
    data.append('id', id);
    axios.post(`http://localhost:3001/api/post/${id}/posts/newAdmin`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
  };

  // console.log('ADMINPOST', adminPost[0]?.image);

  return (
    <div>
      <div className={`${style.admin__post}`}>
        <div className={`${style.admin__postHeader}`}>
          <i className={`${style.admin__postIcon} bi bi-pin-angle`} />
          <img className={style.admin__postAvatar} src={background} alt="" />
          <p className={`${style.admin__postTitle}`}>{`Задание сообщества "${community.title}"`}</p>
        </div>
        <div className={`${style.admin__postText}`}><p>{adminPost[0]?.content}</p></div>
        {adminPost[0]?.image && (<img className={`${style.img}`} alt="" src={`http://localhost:3001/${adminPost[0]?.image}`} />)}
      </div>
      <div className={`${style.wrapper}`} />
      {(isMember || (admin?.id === user?.id)) && (
      <div className={`${style.label}`}>
        <label className={`${style}`} htmlFor="hidden__input">
          <input id="hidden__input" className={`${style.checkbox}`} type="checkbox" />
          Добавить пост...
          <form className={style.hidden__wrapper}>
            <textarea className={style.posts__textarea} value={input} onChange={inputHandler} name="content" placeholder="Расскажите о ваших успехах..." />
            <div className={style.wrapper__btn}>

              <input name="image" type="file" onChange={imgChangeHandler} />

              <button onClick={(e) => { editFile(e); }} className={style.posts__btn} type="submit">Опубликовать</button>

              {admin?.id === user?.id ? (<button onClick={(e) => editAdminFile(e)} className={style.posts__btn__red} type="submit">Задание</button>) : ''}
            </div>
          </form>
        </label>
      </div>
      )}

      {posts?.map((el) => <OnePost img={img} post={el} key={el.id} />)}
    </div>
  );
}
