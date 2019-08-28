import * as types from './types';

export const addIngredient = ingredientId => ({
  type: types.ADD_INGREDIENT,
  payload: ingredientId
});

export const removeIngredient = ingredientId => ({
  type: types.REMOVE_INGREDIENT,
  payload: ingredientId
});

export const searchIngredients = searchInput => ({
  type: types.SEARCH_INGREDIENTS,
  payload: searchInput
});

export const clearSelectedIngredients = () => ({
  type: types.CLEAR_SELECTED_INGREDIENTS
});
