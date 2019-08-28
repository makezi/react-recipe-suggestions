import * as types from './types';
import { searchRecipesWithIngredients } from './utils';
import RECIPES_DATA from './recipes.json';

const INITIAL_STATE = {
  items: RECIPES_DATA,
  suggestions: []
};

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SEARCH_RECIPES:
      return {
        ...state,
        suggestions: searchRecipesWithIngredients(state.items, action.payload)
      };
    default:
      return state;
  }
};

export default recipesReducer;
