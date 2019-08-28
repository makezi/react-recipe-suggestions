import React from 'react';
import { connect } from 'react-redux';

import IngredientsListItem from '../IngredientsListItem';
import {
  selectUnselectedIngredients,
  selectSearchedIngredients,
  selectSearchedIngredientsCount
} from '../../redux/ingredients/selectors';
import { Ingredients, IngredientsListContainer } from './IngredientsList.styles';

const IngredientsList = ({
  ingredients,
  searchedIngredients,
  searchedIngredientsCount
}) => {
  const ingredientsList =
    searchedIngredientsCount > 0 ? searchedIngredients : ingredients;

  return (
    <IngredientsListContainer>
      <h2>Ingredients</h2>
      <Ingredients>
        {ingredientsList.map(ingredient => (
          <IngredientsListItem
            key={ingredient.ingredientId}
            ingredient={ingredient}
            checked={false}
          />
        ))}
      </Ingredients>
    </IngredientsListContainer>
  );
};

const mapStateToProps = state => ({
  ingredients: selectUnselectedIngredients(state),
  searchedIngredients: selectSearchedIngredients(state),
  searchedIngredientsCount: selectSearchedIngredientsCount(state)
});

export default connect(mapStateToProps)(IngredientsList);
