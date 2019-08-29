import React from 'react';
import { connect } from 'react-redux';

import PageContainer from '../../components/PageContainer';
import RecipeStats from '../../components/RecipeStats';
import RecipeIngredientsList from '../../components/RecipeIngredientsList';
import RecipeInstructions from '../../components/RecipeInstructions'
import { selectRecipeById } from '../../redux/recipes/selectors';
import { ImageAndIngrediantsContainer, RecipeImage } from './RecipePage.styles';

const RecipePage = ({ recipe }) => {
  const { name, image, ingredients, instructions } = recipe;
  return (
    <PageContainer>
      <h1>{name}</h1>
      <RecipeStats recipe={recipe} />
      <ImageAndIngrediantsContainer>
        <RecipeImage src={image} alt={`${name}`} />
        <RecipeIngredientsList ingredients={ingredients} />
      </ImageAndIngrediantsContainer>
      <RecipeInstructions instructions={instructions} />
    </PageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  recipe: selectRecipeById(ownProps.match.params.recipeId)(state)
});

export default connect(mapStateToProps)(RecipePage);
