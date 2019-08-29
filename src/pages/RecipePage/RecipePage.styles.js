import styled from 'styled-components';

export const ImageAndIngrediantsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;

  @media screen and (min-width: 500px) {
    width: 33%;
    height: 100%;
    align-self: center;
  }

  @media screen and (min-width: 700px) {
    width: 40%;
    height: 100%;
    align-self: center;
  }
`;
