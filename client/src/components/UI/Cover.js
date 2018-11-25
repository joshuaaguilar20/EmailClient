import styled from 'styled-components';

export default styled.span`
  position: absolute;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
  transition: all 300ms ease-in-out 0s;
  background-color: ${props =>
    props.color === 'REPLUBLICAN'
      ? props.theme.colors.republican
      : props.color === 'DEMOCRATIC'
        ? props.theme.colors.democratic
        : props.theme.colors.others};
  :hover {
    background: black;
    transition: all 300ms ease-in-out 0s;
  }
`;
