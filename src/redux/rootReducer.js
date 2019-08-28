import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients/reducer';
import recipesReducer from './recipes/reducer';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  recipes: recipesReducer
});

export default rootReducer;
