// core
import React, { useState } from 'react';

// styles
import styles from './styles.module.scss';


const CopyBtn = ({ value }) => {

  const [msgVisibility, setMsgVisibility] = useState(false);

  const showMessage = () => {
    setMsgVisibility(true);

    setTimeout(() => {
      setMsgVisibility(false);
    }, 2000);
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(value)
      .then(() => showMessage());
  };

  return (
    <div className={styles.wrapper}>
      {msgVisibility && <span className={styles.message}>Copied!</span>}
      <button className={styles.copyBtn} onClick={copyUrlToClipboard}>Copy</button>
    </div>
  )
};

export default CopyBtn;
