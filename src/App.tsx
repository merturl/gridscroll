import React, { useEffect, useState, useCallback } from 'react';
import Picture from './components/Picture';
import PathInput from './components/PathInput';
import storage from './lib/storage';

const App = () => {
  const [OFFSET, setOFFSET] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [startNumber, setStartNumber] = useState('0');
  const [URL, setURL] = useState('');

  useEffect(() => {
    const storagedURL = storage.get('URL');
    const storagedStartNumber = storage.get('StartNumber');
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
    if (storagedStartNumber) {
      setStartNumber(storagedStartNumber);
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

  const makeImage = (URL: string, startNumber: string) => {
    return Array(10 + OFFSET).fill(0).map((_, i) => <Picture key={i} URL={URL} id={i + parseInt(startNumber)} />);
  }

  const handleURLSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    storage.set('URL', URL);
  }

  const handleStartNumberSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    storage.set('StartNumber', startNumber);
  }

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newURL = e.target.value;

    setURL(newURL);
  }

  const handleStartNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartNumber = e.target.value;

    setStartNumber(newStartNumber);
  }

  return (
    <>
      <PathInput URL={URL}
        startNumber={startNumber}
        onURLChange={handleURLChange}
        onStartNumberChange={handleStartNumberChange}
        onURLSave={handleURLSave}
        onStartNumberSave={handleStartNumberSave} 
      />
      <div className={'grid-container'}>
        {makeImage(URL, startNumber)}
      </div>
    </>
  )
}

export default React.memo(App);
