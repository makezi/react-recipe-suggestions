import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipesListItem from '../RecipesListItem';
import { selectRecipeSuggestions } from '../../redux/recipes/selectors';

const RecipesList = ({ recipes }) => {
  if (!recipes.length)
    return (
      <div>
        <p>No Suggestions Found!</p>
        <p>
          Please reselect your <Link to="/">ingredients</Link>.
        </p>
      </div>
    );

  return (
    <div>
      {recipes.map(recipe => (
        <RecipesListItem key={recipe.recipeId} recipe={recipe} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  recipes: selectRecipeSuggestions(state)
});

export default connect(mapStateToProps)(RecipesList);
