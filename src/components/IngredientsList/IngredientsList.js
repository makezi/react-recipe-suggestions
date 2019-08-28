import React from 'react';
import { connect } from 'react-redux';

import IngredientsListItem from '../IngredientsListItem';
import {
  selectIngredientItems,
  selectSearchedIngredients
} from '../../redux/ingredients/selectors';

const IngredientsList = ({ ingredients, searchedIngredients }) => {
  const ingredientsList = searchedIngredients.length
    ? searchedIngredients
    : ingredients;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {ingredientsList.map(ingredient => (
        <IngredientsListItem
          key={ingredient.ingredientId}
          ingredient={ingredient}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  ingredients: selectIngredientItems(state),
  searchedIngredients: selectSearchedIngredients(state)
});

export default connect(mapStateToProps)(IngredientsList);
