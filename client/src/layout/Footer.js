import React from 'react';
import styled from 'styled-components';

import Network from '../components/UI/Network';
import Forms from '../components/UI/Forms';

const Footer = styled.footer`
  display: grid;
  grid-template-rows: 50px auto 120px 20px;
  margin-top: 1em;
  justify-items: center;
  align-items: center;

  p:nth-child(1) {
    font-size: 1.5em;
    color: ${props => props.theme.colors.secondary};
  }
`;

export default () => (
  <Footer>
    <p children="STAY CONNECTED" />
    <Forms />
    <Network />
    <p children="&copy; 2018 QUILT" />
  </Footer>
);
