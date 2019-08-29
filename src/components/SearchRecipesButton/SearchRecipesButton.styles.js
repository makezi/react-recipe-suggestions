import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  height: 40px;
  background-color: hsl(130, 50%, 80%);
  border-radius: 6px;
  border: none;
  font-size: 16px;
  outline: none;
  padding: 0 20px;

  align-self: center;

  @media screen and (min-width: 780px) {
    position: relative;
    bottom: 0;
    align-self: flex-end;
  }
`;
