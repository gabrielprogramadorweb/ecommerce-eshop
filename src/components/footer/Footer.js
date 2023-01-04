import React from 'react';
import styles from './Footer.module.scss';

//função para buscar data atual//
const date = new Date();

const Footer = () => {
  return <div className={styles.footer}>&copy;</div>;
};

export default Footer;
