import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipesListItem from '../RecipesListItem';
import { selectRecipeSuggestions } from '../../redux/recipes/selectors';
import { RecipesListContainer, NoSuggestions } from './RecipesList.styles';

const RecipesList = ({ recipes }) => {
  if (!recipes.length)
    return (
      <RecipesListContainer>
        <NoSuggestions>No Suggestions Found!</NoSuggestions>
      </RecipesListContainer>
    );

  return (
    <RecipesListContainer>
      {recipes.map(recipe => (
        <RecipesListItem key={recipe.recipeId} recipe={recipe} />
      ))}
    </RecipesListContainer>
  );
};

const mapStateToProps = state => ({
  recipes: selectRecipeSuggestions(state)
});

export default connect(mapStateToProps)(RecipesList);
