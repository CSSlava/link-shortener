// core
import React from 'react';

// styles
import styles from './styles.module.scss';


const Button = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>{children}</button>
  )
};

export default Button;
