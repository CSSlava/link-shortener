// core
import React from 'react';

// components
import CopyBtn from '../CopyBtn';

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
          id="short_url"
        >
          {value}
        </a>
        <CopyBtn value={value} />
      </div>
    </div>
  )
};

export default ShortUrl;
