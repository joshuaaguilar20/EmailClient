import styled from 'styled-components';

export default styled.button`
  display: ${props => (props.connected ? 'inline-block' : 'none')};
  outline: none;
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-size: 1.5em;
  background-color: #c8498b;
  padding-left: 10px;
  border: 1px solid #c8498b;
  border-radius: 3px 0px 3px 0px;
  box-shadow: -2px -1px 2px 0px rgba(0, 0, 0, 0.5);
  transition: all 300ms ease-in-out 0s;
  z-index: 2;
  :active {
    transform: scale(0.95);
    transition: all 100ms ease-in-out 0s;
  }
`;
