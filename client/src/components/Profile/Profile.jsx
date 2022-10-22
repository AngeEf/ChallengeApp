/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import axios from 'axios';
// import style from './style.module.css';

export default function Profile() {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  const sendFile = (e) => {
    const data = new FormData();
    data.append('avatar', img);
    console.log(data);
    axios.post('http://localhost:3001/api/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })

      .then((res) => { setAvatar(res.data.path); });
  };

  const logo = 'https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg';
  console.log(img);
  console.log(avatar);
  return (
    <div>
      <div>
        {
          avatar
            ? <img className="img" src={`${avatar}`} alt="avatar" />
            : <img className="img" src={`${logo}`} alt="img" />
        }
      </div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button type="button" className="btn" onClick={sendFile}>Изменить</button>
    </div>
  );
}

// <div className={style.wrapper}>
//   <div className={style.profile__name__wrapper}>
//     <label htmlFor="exampleInputName" className={style.profile__name__label}>
//       Имя
//       <input
//         name="name"
//         className={style.profile__name__input}
//         id="exampleInputName"
//       />
//     </label>
//   </div>
//   <div className={style.avatar_img}>
//     {
//     avatar
//       ? <img className={style.avatar} src={`${avatar}`} alt="avatar" />
//       : <img className={style.avatar} src={`${img}`} alt="logo" />
//   }
//   </div>
//   <div className="mb-3">
//     <img className={style.avatar} src={img} alt="Avatar" />
//     <button type="submit" className={style.profile__btn}>Выбрать фото</button>
//   </div>
//   <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//   <button
//     type="btn"
//     className={`${style.profile__btn__refresh}`}
//     onClick={sendFile}
//   >
//     Обновить данные
//   </button>
// </div>
