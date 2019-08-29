import styled from 'styled-components';

export const RecipeStatsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;

  @media screen and (min-width: 480px) {
    display: flex;
  }
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  margin-right: 20px;
`;

export const StatIcon = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

export const StatLabel = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;
