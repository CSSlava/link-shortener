// core
import { useState } from 'react';

// helpers
import isValidURL from '../../helpers/isValidURL';


const useShortener = () => {

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
        'Authorization': `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
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

  return { inputValue, inputError, shortUrl, generateShortLink, onChangeLinkInput }

};

export default useShortener;
