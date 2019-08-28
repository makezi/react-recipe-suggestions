import React from 'react';
import { connect } from 'react-redux';

import IngredientsListItem from '../IngredientsListItem';
import { selectSelectedIngredients } from '../../redux/ingredients/selectors';
import { clearSelectedIngredients } from '../../redux/ingredients/actions';
import {
  SelectedIngredientsListContainer,
  HeaderContainer,
  ClearButton,
  Ingredients
} from './SelectedIngredientsList.styles';

const SelectedIngredientsList = ({ ingredients, clearIngredients }) => {
  if (!ingredients.length) return null;

  return (
    <SelectedIngredientsListContainer>
      <HeaderContainer>
        <h2>Selected</h2>
        <ClearButton onClick={clearIngredients}>Clear All</ClearButton>
      </HeaderContainer>
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

const mapDispatchToProps = dispatch => ({
  clearIngredients: () => dispatch(clearSelectedIngredients())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedIngredientsList);
