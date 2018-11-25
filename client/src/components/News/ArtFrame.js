import React from 'react';
import styled from 'styled-components';

import NewsImg from '../../assets/news.jpeg';
import Cover from '../UI/Cover';
import BtnSaved from '../UI/BtnSaved';
import Emoji from '../UI/Emoji';

const Card = styled.div`
  display: grid;
  position: relative;

  width: 300px;
  height: 200px;

  margin: 5px;
  border-radius: 3px;

  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;

  a {
    display: grid;
    color: ${props => props.theme.colors.text};
  }

  .title {
    margin: 15px;
    padding: 0.5em;
    font-size: 1.3em;
    font-weight: 900;
    background: #00000080;
    border-radius: 3px;
    z-index: 2;
  }

  .source {
    align-self: end;
    border-radius: 0 0 0 3px;
    background: black;
    padding: 0.5em;
    width: max-content;
    z-index: 2;
  }
`;

const ArtFrame = props => {
  const { connected, item, savedItem } = props;
  // If there isn't image
  if (item.urlToImage === null) item.urlToImage = NewsImg;

  return (
    <Card img={item.urlToImage}>
      <a href={item.url} target="">
        <Cover color={item.party} />
        <p className="title">{item.title}</p>
        <p className="source">{item.source.name}</p>
      </a>
      <BtnSaved onClick={() => savedItem(item)} connected={connected}>
        <Emoji children="💾" />
      </BtnSaved>
    </Card>
  );
};

export default ArtFrame;
