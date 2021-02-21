import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item' >
       <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
              href={props.path}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <a style={{display: "table-cell"}} href={props.path} target="_blank"><i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;