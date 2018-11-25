import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;

  li {
    display: flex;
    margin: 0px 10px;
    width: 45px;
    height: 45px;
    border: 1px solid;
    border-color: ${props => props.theme.colors.primary};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.secondary};
  }

  a {
    color: ${props => props.theme.colors.primary};
  }
`;

export default () => (
  <Ul>
    <li>
      <a href="https://quilt.netlify.com/">
        <i className="fa fa-facebook-f fa-2x" />
      </a>
    </li>
    <li>
      <a href="https://quilt.netlify.com/">
        <i className="fa fa-twitter fa-2x" />
      </a>
    </li>
    <li>
      <a href="https://quilt.netlify.com/">
        <i className="fa fa-linkedin fa-2x" />
      </a>
    </li>
    <li>
      <a href="https://github.com/joshuaaguilar20/Quilt">
        <i className="fa fa-github fa-2x" />
      </a>
    </li>
  </Ul>
);
