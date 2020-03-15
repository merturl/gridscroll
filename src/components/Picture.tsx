import React from 'react';
import styled from 'styled-components';

const PictureBlock = styled.div`
  background-color: #eee;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    background-color: white;
    padding-top: 10px;
    font-size: 1rem;
    text-align: center;
  }
`

interface PictureProps {
  id: number,
  URL: string
}

const Picture = ({ URL, id }: PictureProps) => {
  const imageURL = `${URL}/${id}.PNG`
  return (
    <PictureBlock>
      <img src={imageURL} />
      <div>{id}</div>
    </PictureBlock>
  )
}

export default Picture;
