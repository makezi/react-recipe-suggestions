import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectSelectedIngredients } from '../../redux/ingredients/selectors';
import { searchRecipes } from '../../redux/recipes/actions';

const SearchRecipesButton = ({
  history,
  selectedIngredients,
  searchRecipes
}) => {
  const handleOnClick = () => {
    history.push('/recipes');
    searchRecipes(selectedIngredients);
  };

  return <button onClick={handleOnClick}>Search Recipes</button>;
};

const mapStateToProps = state => ({
  selectedIngredients: selectSelectedIngredients(state)
});

const mapDispatchToProps = dispatch => ({
  searchRecipes: selectedIngredients =>
    dispatch(searchRecipes(selectedIngredients))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SearchRecipesButton);
