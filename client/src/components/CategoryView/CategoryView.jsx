import React from 'react';
import { Col } from 'react-bootstrap';
import Section from '../Section/Section';
import style from './style.module.css';

export default function CategoryView() {
  // challenges
  // communities
  return (
    <div>
      <Col>
        <div className={style.section}>
          <Section />
        </div>
      </Col>
      <Col>
        <div className={style.section}>
          <Section />
        </div>
      </Col>
    </div>
  );
}
