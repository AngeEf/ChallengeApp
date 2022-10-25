import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { checkAdmin } from '../../app/slices/adminSlice';
import { getCurrAdmin } from '../../app/slices/memberSlice';
import style from './style.module.css';

export default function Members() {
  const avatar = 'https://cdn.vectorstock.com/i/preview-1x/82/55/anonymous-user-circle-icon-vector-18958255.jpg';

  const dispatch = useDispatch();
  const { id } = useParams();
  const currAdmin = useSelector((state) => state.member);

  // console.log('ADMIN', currAdmin[0]?.image);

  useEffect(() => {
    dispatch(getCurrAdmin(id));
  }, []);

  return (
    <div className={`${style.wrapper}`}>
      <h5>Администратор группы</h5>
      <div className={`${style.member__wrapper}`}>
        <img className={`${style.member__avatar}`} src={currAdmin[0]?.image ? `http://localhost:3001/${currAdmin[0]?.image}` : avatar} alt="avatar" />
        <span>{currAdmin[0]?.name}</span>
        <span>Админ</span>
      </div>
    </div>
  );
}
