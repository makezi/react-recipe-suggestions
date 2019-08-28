import * as types from './types';

import INGREDIENTS_DATA from './ingredients.json';

const INITIAL_STATE = {
  items: INGREDIENTS_DATA,
  selected: []
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return { ...state, selected: [...state.selected, action.payload] };
    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        selected: state.selected.filter(
          ingredientId => ingredientId !== action.payload
        )
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
