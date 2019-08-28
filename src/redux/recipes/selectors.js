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
