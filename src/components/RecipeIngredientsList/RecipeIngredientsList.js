import React from 'react';

import {
  RecipeIngredientsListContainer,
  IngredientsListContainer,
  IngredientListItemContainer
} from './RecipeIngredientsList.styles';

const RecipeIngredientsList = ({ ingredients, missingIngredients }) => {
  const missingIngredientIds = missingIngredients.map(
    missingIngredient => missingIngredient.ingredientId
  );

  return (
    <RecipeIngredientsListContainer>
      <h3>Ingredients</h3>
      <IngredientsListContainer>
        {ingredients.map(ingredient => {
          const { ingredientId, text } = ingredient;
          const isMissing = missingIngredientIds.includes(ingredientId);
          return (
            <IngredientListItemContainer
              key={ingredientId}
              isMissing={isMissing}
            >
              {isMissing ? `${text} - Missing` : text}
            </IngredientListItemContainer>
          );
        })}
      </IngredientsListContainer>
    </RecipeIngredientsListContainer>
  );
};

export default RecipeIngredientsList;
