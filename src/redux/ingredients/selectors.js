import { createSelector } from 'reslect';

const selectIngredients = state => state.ingredients;

export const selectSelectedIngredients = createSelector(
  [selectIngredients],
  ingredients => ingredients.selected
);
