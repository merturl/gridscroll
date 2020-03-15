import React, { useState } from 'react';
import styled from 'styled-components';

interface PathInputProps {
  URL: string;
  startNumber: string;
  onURLChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStartNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onURLSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onStartNumberSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PathInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  button {

  }
  input {
  }
`


const PathInput = ({ URL, startNumber, onURLChange, onStartNumberChange, onURLSave, onStartNumberSave }: PathInputProps) => {
  console.log(startNumber);
  return (
    <PathInputBlock>
      <div>
        <input type="text" onChange={onURLChange} value={URL} placeholder={`http://localhost:9999/image/result`}></input>
        <button onClick={onURLSave}>Save URL</button>
      </div>
      <div>
        <input type="text" onChange={onStartNumberChange} value={startNumber} placeholder={'123'}></input>
        <button onClick={onStartNumberSave}>Save Start Number</button>
      </div>
    </PathInputBlock>
  )
}


export default PathInput;
