import React from 'react';
import styled from 'styled-components';

const PictureBlock = styled.div`
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
    @media (max-width: 992px) {
      transform: none;
    }
  }

  border-radius: 4px;
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
    border-top: 1px solid rgb(248, 249, 250);
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
