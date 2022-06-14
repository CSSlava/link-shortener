// core
import React from 'react';

// components
import LinkInput from '../LinkInput';
import Button from '../Button';
import ShortUrl from '../ShortUrl';

// hooks
import useShortener from './useShortener';

// styles
import styles from './styles.module.scss';


const Shortener = () => {

  const {
    inputValue,
    inputError,
    shortUrl,
    generateShortLink,
    onChangeLinkInput,
  } = useShortener();

  return (
    <div className={styles.wrapper}>
      <LinkInput value={inputValue} setValue={onChangeLinkInput} isError={inputError} />
      <Button onClick={generateShortLink}>Shorten</Button>
      <ShortUrl value={shortUrl}/>
    </div>
  )
};

export default Shortener;
