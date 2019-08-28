import { createSelector } from 'reselect';
import _mapKeys from 'lodash/mapKeys';

const selectIngredients = state => state.ingredients;

export const selectUnselectedIngredients = createSelector(
  [selectIngredients],
  ingredients => {
    const { items, selected } = ingredients;

    const unselectedIngredients = Object.values(items).filter(
      ingredient => !selected.includes(ingredient.ingredientId)
    );

    return unselectedIngredients;
  }
);

export const selectSelectedIngredients = createSelector(
  [selectIngredients],
  ingredients => {
    const { items, selected } = ingredients;

    if (!selected.length) {
      return [];
    }

    const selectedIngredients = selected.map(
      ingredientId => items[ingredientId]
    );

    return selectedIngredients;
  }
);

export const selectSearchedIngredients = createSelector(
  [selectIngredients, selectUnselectedIngredients],
  (ingredients, unselectedIngredients) => {
    const { searched } = ingredients;

    if (!searched.length) {
      return [];
    }

    const mappedIdToValues = _mapKeys(unselectedIngredients, 'ingredientId');
    const searchedIngredients = searched
      .filter(ingredientId => mappedIdToValues[ingredientId])
      .map(ingredientId => mappedIdToValues[ingredientId]);

    return searchedIngredients;
  }
);

export const selectSearchedIngredientsCount = createSelector(
  [selectIngredients],
  ingredients => ingredients.searched.length
);
