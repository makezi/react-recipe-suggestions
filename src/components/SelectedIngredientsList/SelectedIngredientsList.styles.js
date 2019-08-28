import styled from 'styled-components';

export const SelectedIngredientsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ClearButton = styled.button`
  height: 40px;
  background-color: rgba(255, 0, 0, 0.2);
  border-radius: 6px;
  border: none;
  font-size: 16px;
  outline: none;
  padding: 0 20px;

  align-self: center;
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
