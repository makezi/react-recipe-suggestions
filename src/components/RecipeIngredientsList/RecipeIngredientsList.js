import React from 'react';

import {
  RecipeIngredientsListContainer,
  IngredientsListContainer
} from './RecipeIngredientsList.styles';

const RecipeIngredientsList = ({ ingredients }) => {
  return (
    <RecipeIngredientsListContainer>
      <h3>Ingredients</h3>
      <IngredientsListContainer>
        {ingredients.map(ingredient => (
          <li key={ingredient.ingredientId}>{ingredient.text}</li>
        ))}
      </IngredientsListContainer>
    </RecipeIngredientsListContainer>
  );
};

export default RecipeIngredientsList;
