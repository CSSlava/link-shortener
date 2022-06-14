// core
import React from 'react';

// styles
import styles from './styles.module.scss';


const LinkInput = ({ value, setValue, isError }) => {

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Enter your link</h2>
      <input
        type="text"
        placeholder="Past your link"
        value={value}
        onChange={setValue}
        className={isError ? styles.withError : ''}
      />
      {isError && <p className={styles.errorMessage}>URL is not valid!</p>}
    </div>
  )
};

export default LinkInput;
