import React from 'react';
import { connect } from 'react-redux';

import IngredientsListItem from '../IngredientsListItem';
import { selectSelectedIngredients } from '../../redux/ingredients/selectors';

const SelectedIngredientsList = ({ ingredients }) => {
  return (
    <div>
      <h2>Selected</h2>
      <div>
        {ingredients.map(ingredient => (
          <IngredientsListItem
            key={ingredient.ingredientId}
            ingredient={ingredient}
            checked
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ingredients: selectSelectedIngredients(state)
});

export default connect(mapStateToProps)(SelectedIngredientsList);
