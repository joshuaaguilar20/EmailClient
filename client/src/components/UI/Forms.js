import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    font-weight: 900;
    margin-bottom: 20px;
    padding: 1em;
    width: 280px;
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    background: #fcf0eb;
    resize: none;
    outline-color: ${props => props.theme.colors.secondary};
  }
`;

export default () => (
  <Form
    method="POST"
    name="contact"
    action="https://formspree.io/jamarredwards@gmail.com"
    netlify>
    <input placeholder="Your Name" type="text" name="name" required />
    <input placeholder="Your E-mail" type="email" name="email" required />
    <textarea placeholder="Your Message" name="message" required />
    <Button type="Submit" value="Send" children="Submit" />
  </Form>
);
