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
    </PictureBlock>
  )
}

export default Picture;