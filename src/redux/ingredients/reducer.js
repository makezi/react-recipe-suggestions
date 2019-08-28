import * as types from './types';
import { searchIngredientsFromInput } from './utils';

import INGREDIENTS_DATA from './ingredients.json';

const INITIAL_STATE = {
  items: INGREDIENTS_DATA,
  selected: [],
  searched: []
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        selected: [...new Set([...state.selected, action.payload])]
      };
    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        selected: state.selected.filter(
          ingredientId => ingredientId !== action.payload
        )
      };
    case types.SEARCH_INGREDIENTS:
      return {
        ...state,
        searched: searchIngredientsFromInput(state.items, action.payload)
      };
    case types.CLEAR_SELECTED_INGREDIENTS:
      return {
        ...state,
        selected: INITIAL_STATE.selected
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
