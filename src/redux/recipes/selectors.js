import { createSelector } from 'reselect';

const selectRecipes = state => state.recipes;
const selectIngredients = state => state.ingredients;

export const selectAllRecipes = createSelector(
  [selectRecipes],
  recipes => Object.values(recipes.items)
);

export const selectRecipeById = recipeId =>
  createSelector(
    [selectRecipes],
    recipes => recipes.items[recipeId]
  );

export const selectRecipeSuggestions = createSelector(
  [selectRecipes],
  recipes => {
    const { items, suggestions } = recipes;

    if (!suggestions.length) return [];

    return suggestions.map(recipeId => items[recipeId]);
  }
);

export const selectMissingIngredientsForRecipe = recipeId =>
  createSelector(
    [selectRecipes, selectIngredients],
    (recipes, ingredients) => {
      const selectedIngredients = ingredients.selected;

      if (!selectedIngredients.length) return [];

      const recipeById = recipes.items[recipeId];
      const recipeIngredients = recipeById.ingredients;
      const missingIngredients = recipeIngredients.filter(
        recipeIngredient =>
          !selectedIngredients.find(
            selectedIngredient =>
              selectedIngredient === recipeIngredient.ingredientId
          )
      );

      return missingIngredients;
    }
  );
