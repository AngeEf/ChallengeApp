import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './style.module.css';

export default function Statistics({ community }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [countMembers, setCountMembers] = useState();

  useEffect(() => {
    axios.get(`/api/community/communities/${id}/count`)
      .then((res) => setCountMembers(res.data));
  });

  return (
    <div className={`${style.wrapper}`}>
      <h5>Статистика</h5>
      <span>
        Количество участников:
        <span className={style.statistics}>
          {countMembers}
        </span>
      </span>
      <span>
        Категория сообщества:
        <span className={style.statistics}>
          {community?.category === 'lifestyle' ? 'Лайфстайл' : community?.category === 'sport' ? 'Спорт' : community?.category === 'health' ? 'Здоровье' : community?.category === 'food' ? 'Питание' : community?.category === 'photography' ? 'Фотография' : community?.category === 'art' ? 'Искусство' : community?.category === 'writing' ? 'Письмо' : community?.category === 'productivity' ? 'Продуктивность' : 'Другое'}
        </span>
      </span>
      <span>
        Было основано:
        <span className={style.statistics}>
          {community.createdAt && community.createdAt.slice(0, 10)}
        </span>
      </span>
    </div>
  );
}
