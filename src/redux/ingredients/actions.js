import * as types from './types';

export const addIngredient = ingredientId => ({
  type: types.ADD_INGREDIENT,
  payload: ingredientId
});

export const removeIngredient = ingredientId => ({
  type: types.REMOVE_INGREDIENT,
  payload: ingredientId
});
