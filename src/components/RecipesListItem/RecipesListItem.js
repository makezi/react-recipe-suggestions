import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectMissingIngredientsForRecipe } from '../../redux/recipes/selectors';
import {
  RecipesListItemContainer,
  BackgroundImage,
  RecipesContentContainer,
  RecipeName,
  MissingIngredientsTag
} from './RecipesListItem.styles';

const RecipesListItem = ({ history, match, recipe, missingIngredients }) => {
  const { recipeId, name, image } = recipe;

  const handleOnClick = () => {
    history.push(`${match.url}/${recipeId}`);
  };

  return (
    <RecipesListItemContainer onClick={handleOnClick}>
      <BackgroundImage style={{ backgroundImage: `url(${image})` }} />
      <RecipesContentContainer>
        <RecipeName>{name}</RecipeName>
        {missingIngredients.length ? (
          <MissingIngredientsTag>Missing Ingredients</MissingIngredientsTag>
        ) : null}
      </RecipesContentContainer>
    </RecipesListItemContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  missingIngredients: selectMissingIngredientsForRecipe(
    ownProps.recipe.recipeId
  )(state)
});

export default compose(
  connect(mapStateToProps),
  withRouter
)(RecipesListItem);
