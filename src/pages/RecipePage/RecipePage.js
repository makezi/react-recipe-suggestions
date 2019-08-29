import React from 'react';
import { connect } from 'react-redux';

import PageContainer from '../../components/PageContainer';
import RecipeStats from '../../components/RecipeStats';
import { selectRecipeById } from '../../redux/recipes/selectors';

const RecipePage = ({ recipe }) => {
  const {
    name,
    difficulty,
    prepTime,
    cookTime,
    makes,
    image,
    ingredients,
    instructions
  } = recipe;
  return (
    <PageContainer>
      <h1>{name}</h1>
      <RecipeStats recipe={recipe} />

      <img width={200} height={200} src={image} alt={`${name}`} />

      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <ol>
        {instructions.map(instruction => (
          <li>{instruction}</li>
        ))}
      </ol>
    </PageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipe: selectRecipeById(ownProps.match.params.recipeId)(state)
});

export default connect(mapStateToProps)(RecipePage);
