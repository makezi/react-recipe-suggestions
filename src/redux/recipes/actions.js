import * as types from './types';

export const searchRecipes = selectedIngredients => ({
  type: types.SEARCH_RECIPES,
  payload: selectedIngredients
});
