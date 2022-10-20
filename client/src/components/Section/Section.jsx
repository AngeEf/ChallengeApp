import React from 'react';
import { Button, Card } from 'react-bootstrap';
import style from './style.module.css';

export default function Section() {
  return (
    <div className={style.section}>
      <h2>Challenges</h2>
      <div className={style.section_cards}>
        {/* card 1 */}
        <div className={style.section_card}>
          <div className={style.section_box}>
            <img className={style.section_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
          </div>
          <div className={style.section_contetn}>
            <h3>Card Title</h3>
            <h5>Some quick example</h5>
          </div>
        </div>
        {/* card 2 */}
        <div className={style.section_card}>
          <div className={style.section_box}>
            <img className={style.section_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
          </div>
          <div className={style.section_contetn}>
            <h3>Card Title</h3>
            <h5>Some quick example</h5>
          </div>
        </div>
        <div className={style.section_card}>
          <div className={style.section_box}>
            <img className={style.section_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
          </div>
          <div className={style.section_contetn}>
            <h3>Card Title</h3>
            <h5>Some quick example</h5>
          </div>
        </div>
        <div className={style.section_card}>
          <div className={style.section_box}>
            <img className={style.section_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
          </div>
          <div className={style.section_contetn}>
            <h3>Card Title</h3>
            <h5>Some quick example</h5>
          </div>
        </div>
        <div className={style.section_card}>
          <div className={style.section_box}>
            <img className={style.section_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
          </div>
          <div className={style.section_contetn}>
            <h3>Card Title</h3>
            <h5>Some quick example</h5>
          </div>
        </div>
        <div className={style.section_card}>
          <div className={style.section_box}>
            <img className={style.section_img} src="https://s3.castbox.fm/fe/19/e7/9ed47e47e8ba399fc32052f816.png" alt="challenge" />
          </div>
          <div className={style.section_contetn}>
            <h3>Card Title</h3>
            <h5>Some quick example</h5>
          </div>
        </div>
        {/* final */}
      </div>
      {/* section_cards */}
      <Button variant="primary" className="mt-3">See more info</Button>
    </div>
  );
}
