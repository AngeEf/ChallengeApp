import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import style from './style.module.css';

export default function ChallengeView() {
  const { id } = useParams();

  return (
    <div className={style.challenge}>
      <div className={style.details}>
        <div className={style.details_content}>
          <h2 className={style.details_title}>Name Challenge</h2>
          <h4 className={style.details_subtitle}>Subtitle Challenge</h4>

          <div className={style.details_data}>
            <div>
              <span className="ms-0 me-3">Участвуют сейчас: 20</span>
              <span className="ms-0">
                {'Сложность: '}
                <i className="bi bi-star-fill mx-1" style={{ color: '#F4D2BC' }} />
                <i className="bi bi-star-fill mx-1" style={{ color: '#F4D2BC' }} />
                <i className="bi bi-star-fill mx-1" style={{ color: '#F4D2BC' }} />
              </span>
            </div>
            <Button type="button">Принять участие</Button>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis quas consequuntur? Quam aperiam laborum tempore aspernatur, sit, maxime, dicta eveniet atque quaerat culpa voluptatem necessitatibus facere officia voluptas.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum laudantium esse, sapiente qui ea! Eligendi illum minima ullam quisquam maxime voluptatibus iusto, reiciendis fugit blanditiis, voluptate velit hic labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis quas consequuntur? Quam aperiam laborum tempore aspernatur, sit, maxime, dicta eveniet atque quaerat culpa voluptatem necessitatibus facere officia voluptas.</p>
        </div>
      </div>
      <div className={style.image}>
        <div className={style.image_box}>
          <img className={style.image_photo} src="https://i1.wp.com/s-media-cache-ak0.pinimg.com/564x/92/d8/8c/92d88c81ad3090922a518469cf4585cb.jpg?resize=350%2C600&ssl=1" alt="challenge1" />
        </div>
      </div>
    </div>
  );
}
