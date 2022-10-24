import React from 'react';
import CardItemChallenge from '../CardItemChallenge/CardItemChallenge';
import style from './style.module.css';

export default function SectionViewChallenge() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getChallenges());
  // }, []);
  return (
    <>
      {/* <div className={style.section_data}>
        <div>
          <Link to="/api/#" className="me-3">Все сообщества</Link>
          <Link to="/api/#">Управление</Link>
        </div>
        <Button type="button">Создать сообщество</Button>
      </div> */}
      <div className={style.section}>
        <CardItemChallenge />
      </div>
    </>
  );
}
