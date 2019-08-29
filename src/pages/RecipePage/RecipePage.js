import React from 'react';
import { connect } from 'react-redux';

import PageContainer from '../../components/PageContainer';
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
      <img width={200} height={200} src={image} alt={`${name}`} />
      <p>{difficulty}</p>
      <p>{prepTime}</p>
      <p>{cookTime}</p>
      <p>{makes}</p>
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
