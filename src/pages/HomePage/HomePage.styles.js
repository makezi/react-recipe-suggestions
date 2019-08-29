import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
