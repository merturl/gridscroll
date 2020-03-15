import React, { useState } from 'react';
import styled from 'styled-components';

interface PathInputProps {
  URL: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PathInputBlock = styled.div`

  button {

  }  
  input {
  }
`


const PathInput = ({URL, onChange, onClick}: PathInputProps) => {
  return (
    <PathInputBlock>
      <input onChange={onChange} value={URL} placeholder={`http://localhost:9999/image/result`}></input>
      <button onClick={onClick}>Save URL</button>
    </PathInputBlock>
  )
}


export default PathInput;
