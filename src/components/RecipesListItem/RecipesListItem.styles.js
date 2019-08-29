import styled from 'styled-components';

export const RecipesListItemContainer = styled.div`
  position: relative;
  height: 33vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;

export const RecipesContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
`;

export const RecipeName = styled.span`
  font-size: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
`;

export const MissingIngredientsTag = styled.span`
  background-color: hsl(350, 50%, 50%);
  margin-top: 10px;
  padding: 10px;
  border-radius: 6px;
  color: white;
`
