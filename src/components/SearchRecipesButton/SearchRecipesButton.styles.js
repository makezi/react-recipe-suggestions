import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  border: none;
  font-size: 16px;
  outline: none;
  padding: 0 20px;

  align-self: center;

  @media screen and (min-width: 500px) {
    align-self: flex-end;
  }
`;
