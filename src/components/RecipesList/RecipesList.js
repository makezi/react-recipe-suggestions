import React from 'react';
import { connect } from 'react-redux';

import RecipesListItem from '../RecipesListItem';
import { selectAllRecipes } from '../../redux/recipes/selectors';

const RecipesList = ({ recipes }) => {
  return (
    <div>
      {recipes.map(recipe => (
        <RecipesListItem key={recipe.recipeId} recipe={recipe} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  recipes: selectAllRecipes(state)
});

export default connect(mapStateToProps)(RecipesList);
