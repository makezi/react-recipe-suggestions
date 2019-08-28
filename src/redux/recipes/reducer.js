import RECIPES_DATA from './recipes.json';

const INITIAL_STATE = {
  items: RECIPES_DATA,
  suggestions: []
};

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipesReducer;
