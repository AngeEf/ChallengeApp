import React from 'react';
import { Button, Card } from 'react-bootstrap';
import style from './style.module.css';

export default function CardItem({navigateHandler}) {

  return (
    <>
      <Card className={style.card}>
        <div className={style.cart_img}>
          <Card.Img className={style.cart_photo} variant="top" src="https://cdn-0.brodude.ru/-P5b29Hes7kcr1RZOenjxj5MyrkGOQRmkdoL1xaQw-o/rs:fill:400:400:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9icm9kdWRlLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEyLzA5L3N1cGVyY29vbHBpY3NfMDdfMTAwOTIwMTIxNjE0MjQuanBn" />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary" onClick={navigateHandler}>Go somewhere</Button>
        </Card.Body>
      </Card>
      {/* cards 2 */}

      {/* final */}
    </>
  );
}
