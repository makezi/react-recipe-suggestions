import { createSelector } from 'reselect';

const selectRecipes = state => state.recipes;

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
