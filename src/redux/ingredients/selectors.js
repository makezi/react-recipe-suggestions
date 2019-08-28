import { createSelector } from 'reselect';

const selectIngredients = state => state.ingredients;

export const selectIngredientItems = createSelector(
  [selectIngredients],
  ingredients => Object.values(ingredients.items)
);

export const selectSelectedIngredients = createSelector(
  [selectIngredients],
  ingredients => ingredients.selected
);

export const selectSearchedIngredients = createSelector(
  [selectIngredients],
  ingredients => {
    const { items, searched } = ingredients;

    if (!searched.length) {
      return [];
    }

    const searchedIngredients = searched.map(
      ingredientId => items[ingredientId]
    );

    return searchedIngredients;
  }
);
