import styled from 'styled-components';

export const SelectedIngredientsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Ingredients = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
