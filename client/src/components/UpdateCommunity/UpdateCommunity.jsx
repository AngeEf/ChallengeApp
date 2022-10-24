import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneCommunity, getUpdateCommunity, setOneCommunity } from '../../app/slices/communitySlice';
import style from './style.module.css';

export default function UpdateCommunity() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const community = useSelector((state) => state.communities);

  useEffect(() => {
    dispatch(getOneCommunity(id));
  }, []);

  const submitHandler = (e, input) => {
    e.preventDefault();
    dispatch(getUpdateCommunity(id, input));
    navigate(`/community/${id}`);
  };

  return community && (
    <div className={style.wrapper}>
      <form
        className={style.form}
        onSubmit={(e) => {
          submitHandler(e, Object.fromEntries(new FormData(e.target)));
        }}
      >
        <label htmlFor="title">Название сообщества:</label>
        <input placeholder={community?.title} className={style.input} type="text" id="title" name="title" />
        <label htmlFor="subtitle">Краткое описание:</label>
        <input placeholder={community?.subtitle} className={style.input} type="text" id="subtitle" name="subtitle" />
        <label htmlFor="category">Категория:</label>
        <select placeholder={community?.category} className={style.input} id="category" name="category">
          <option value="lifestyle">Лайфстайл</option>
          <option value="sport">Спорт</option>
          <option value="health">Здоровье</option>
          <option value="food">Питание</option>
          <option value="photography">Фотография</option>
          <option value="art">Искусство</option>
          <option value="writing">Письмо</option>
          <option value="productivity">Продуктивность</option>
        </select>
        <label htmlFor="description">Описание:</label>
        <textarea placeholder={community?.description} className={style.input} type="textarea" id="description" name="description" />
        <button className={style.newCommunity__btn} type="submit">
          Обновить данные
        </button>
      </form>
    </div>
  );
}
