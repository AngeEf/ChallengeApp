import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMembers } from '../../app/slices/memberSlice';
// import { getMembers } from '../../app/slices/memberSlice';
import style from './style.module.css';

export default function Members() {
  const img = 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/07/fit-female-runner.jpg?quality=82&strip=all&w=640';
  const img1 = 'https://i.pinimg.com/736x/f9/b1/ee/f9b1eecfb0f2bd9dff1d6bfb5deef6fa.jpg';
  const img2 = 'https://i.pinimg.com/564x/a1/4b/78/a14b7848851a143f2f06cc8bf6bf5627.jpg';
  const img3 = 'https://i.pinimg.com/564x/83/45/71/834571aabbe4710bab878a7559d7301c.jpg';
  const img4 = 'https://i.pinimg.com/564x/45/e8/af/45e8af342b436da2ec12c0eeada2c49a.jpg';
  const img5 = 'https://i.pinimg.com/564x/3e/11/57/3e11571d0f1bab70cb3d4af01fd5a75f.jpg';

  const dispatch = useDispatch();
  const { id } = useParams();
  const members = useSelector((state) => state.member);

  useEffect(() => {
    dispatch(getMembers(id));
  }, []);

  return (
    <div className={`${style.wrapper}`}>
      <h5>Администратор группы</h5>
      {members?.map((el) => (
        <div key={el} className={`${style.member__wrapper}`}>
          <img className={`${style.member__avatar}`} src={el.image ? el.image : img} alt="avatar" />
          <span>{el.name}</span>
          <span>{el.Communities[0].admin_id == el.id ? '(Админ)' : '(Участник)'}</span>
        </div>
      ))}
    </div>
  );
}
