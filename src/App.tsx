import React, { useEffect, useState, useCallback } from 'react';
import Picture from './components/Picture';
import PathInput from './components/PathInput';
import storage from './lib/storage';

const App = () => {
  const [OFFSET, setOFFSET] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [URL, setURL] = useState('');

  useEffect(() => {
    const storagedURL = storage.get('URL');
    const handleScrolling = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  
      if (scrollTop + clientHeight === scrollHeight) {
        setIsEnd(true);
      } else {
        setIsEnd(false);
      }
    };
    if (storagedURL) {
      setURL(storagedURL);
    }

    document.addEventListener('scroll', handleScrolling);
    return () => {
      document.removeEventListener('scroll', handleScrolling);
    };
  }, []);

  useEffect(() => {
    const newOFFSET = OFFSET + 10;
    if (isEnd) setOFFSET(newOFFSET);
  }, [isEnd]);

  const makeImage = (URL: string) => {
    return Array(10+OFFSET).fill(0).map((_, i) => <Picture key={i} URL={URL} id={i} />);
  }

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    storage.set('URL', URL);
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newURL = e.target.value;

    setURL(newURL);
  }

  return (
    <>
      <PathInput URL={URL} onChange={handleOnChange} onClick={handleOnClick} />
      <div className={'grid-container'}>
        {makeImage(URL)}
      </div>
    </>
  )
}

export default React.memo(App);
