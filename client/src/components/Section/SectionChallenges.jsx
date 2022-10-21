import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from './style.module.css';

export default function SectionChallenges() {
  const navigate = useNavigate();
  return (
    <div className={style.section}>
      <h2 className={style.section_title}>Испытания</h2>
      <div className={style.section_content}>

        <div className={style.cards}>
          {/* card 1 */}
          <div className={style.card}>
            <div className={style.card_box}>
              <img className={style.card_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
            </div>
            <div className={style.card_content}>
              <h3>Card Title</h3>
              <h5>Some quick example</h5>
            </div>
          </div>
          {/* card 2 */}
          <div className={style.card}>
            <div className={style.card_box}>
              <img className={style.card_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
            </div>
            <div className={style.card_content}>
              <h3>Card Title</h3>
              <h5>Some quick example</h5>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.card_box}>
              <img className={style.card_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
            </div>
            <div className={style.card_content}>
              <h3>Card Title</h3>
              <h5>Some quick example</h5>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.card_box}>
              <img className={style.card_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
            </div>
            <div className={style.card_content}>
              <h3>Card Title</h3>
              <h5>Some quick example</h5>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.card_box}>
              <img className={style.card_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
            </div>
            <div className={style.card_content}>
              <h3>Card Title</h3>
              <h5>Some quick example</h5>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.card_box}>
              <img className={style.card_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
            </div>
            <div className={style.card_content}>
              <h3>Card Title</h3>
              <h5>Some quick example</h5>
            </div>
          </div>
          {/* final */}
        </div>
      </div>
      {/* section_cards */}
      <Button variant="link" className={style.card_btn} onClick={() => navigate('/category/group')}>See more info</Button>
    </div>
  );
}
