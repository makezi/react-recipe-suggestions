import styled from 'styled-components';

export const RecipesListContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 10px 0;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NoSuggestions = styled.p`
  font-weight: bold;
  color: hsl(350, 50%, 50%);
`;
