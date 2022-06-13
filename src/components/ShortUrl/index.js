// core
import React from 'react';

// styles
import styles from './styles.module.scss';


const ShortUrl = ({ value }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Short link: </span>
      <div className={styles.shortUrl}>
        <a
          href={value || '#'}
          className={styles.result}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
        <button className={styles.copyBtn}>Copy</button>
      </div>
    </div>
  )
};

export default ShortUrl;
