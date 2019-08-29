import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  padding: 15px;

  h1 {
    font-size: 24px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 5px;
  display: flex;
  align-items: center;
  

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  span {
    margin-left: 5px;
  }
`;
