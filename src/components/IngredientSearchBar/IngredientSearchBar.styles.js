import styled from 'styled-components';

export const IngredientSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  max-width: 420px;
  
  @media screen and (min-width: 600px) {
    width: 100%;
    max-width: 40%;
  }
`;

export const SearchBar = styled.input`
  background-color: transparent;
  border: none;
  font-size: 16px;
  outline: none;
  width: 100%;
`

export const ClearButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
`
