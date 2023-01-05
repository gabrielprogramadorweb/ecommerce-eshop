//Cartão reutilizavel para usar onde quiser, cartão que envolve div//
import React from 'react';
import styles from './Card.module.scss';

const Card = ({ children, cardClass }) => {
  return <div className={`${styles.card} ${cardClass}`}>{children}</div>;
};

export default Card;
