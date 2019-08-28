import React from 'react';
import { connect } from 'react-redux';

import IngredientsListItem from '../IngredientsListItem';
import {
  selectUnselectedIngredients,
  selectSearchedIngredients,
  selectSearchedIngredientsCount
} from '../../redux/ingredients/selectors';

const IngredientsList = ({
  ingredients,
  searchedIngredients,
  searchedIngredientsCount
}) => {
  const ingredientsList =
    searchedIngredientsCount > 0 ? searchedIngredients : ingredients;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Ingredients</h2>
      {ingredientsList.map(ingredient => (
        <IngredientsListItem
          key={ingredient.ingredientId}
          ingredient={ingredient}
          checked={false}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  ingredients: selectUnselectedIngredients(state),
  searchedIngredients: selectSearchedIngredients(state),
  searchedIngredientsCount: selectSearchedIngredientsCount(state)
});

export default connect(mapStateToProps)(IngredientsList);
