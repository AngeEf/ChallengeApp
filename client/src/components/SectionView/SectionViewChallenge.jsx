import React from 'react';
import CardItemChallenge from '../CardItemChallenge/CardItemChallenge';
import style from './style.module.css';

export default function SectionViewChallenge() {
  return (
    <>
      <div className={style.section}>
        <CardItemChallenge />
      </div>
    </>
  );
}
