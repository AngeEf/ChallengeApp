import React from 'react';
import { Button, Card } from 'react-bootstrap';
import style from './style.module.css';

export default function Section() {
  return (
    <div className={style.card}>
      <Card>
        <div>
          <Card.Img variant="top" src="https://lh3.googleusercontent.com/cBxf77CTfdM7LIxV-UspQqych1GbkL2NXTNOBQ6XaI54aOO5QUZ6V4Aogm9XcJkFNJU=w300" />
        </div>
        <Card.Title>Card Title</Card.Title>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
