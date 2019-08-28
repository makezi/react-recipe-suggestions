import React from 'react';
import { connect } from 'react-redux';

import IngredientsListItem from '../IngredientsListItem';
import { selectSelectedIngredients } from '../../redux/ingredients/selectors';
import {
  SelectedIngredientsListContainer,
  Ingredients
} from './SelectedIngredientsList.styles';

const SelectedIngredientsList = ({ ingredients }) => {
  if (!ingredients.length) return null;

  return (
    <SelectedIngredientsListContainer>
      <h2>Selected</h2>
      <Ingredients>
        {ingredients.map(ingredient => (
          <IngredientsListItem
            key={ingredient.ingredientId}
            ingredient={ingredient}
            checked
          />
        ))}
      </Ingredients>
    </SelectedIngredientsListContainer>
  );
};

const mapStateToProps = state => ({
  ingredients: selectSelectedIngredients(state)
});

export default connect(mapStateToProps)(SelectedIngredientsList);
