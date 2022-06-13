// core
import React, { useState } from 'react';

// components
import LinkInput from '../LinkInput';
import Button from '../Button';
import ShortUrl from '../ShortUrl';

// helpers
import isValidURL from '../../helpers/isValidURL';

// styles
import styles from './styles.module.scss';


const Shortener = () => {
  const AUTH_TOKEN = 'b81f8530982b146a28a74a85f1a87122210ca8f3';

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [shortUrl, setShortUrl] = useState('');

  const onChangeLinkInput = e => {
    setInputValue(e.target.value);
  };

  const shortLink = async (link) => {
    await fetch('https://api-ssl.bitly.com/v4/shorten', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`
      },
      method: 'POST',
      body: JSON.stringify({
        "domain": "bit.ly",
        "long_url": link
      })
    }).then(res => res.json())
      .then(data => {
        setInputError(false);
        setShortUrl(data.link);
      });
  };

  const generateShortLink = async () => {
    if (isValidURL(inputValue)) {
      await shortLink(inputValue);
    } else {
      setInputError(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <LinkInput value={inputValue} setValue={onChangeLinkInput} isError={inputError} />
      <Button onClick={generateShortLink}>Shorten</Button>
      <ShortUrl value={shortUrl}/>
    </div>
  )
};

export default Shortener;
