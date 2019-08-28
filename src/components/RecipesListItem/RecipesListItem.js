import React from 'react';
import { withRouter } from 'react-router-dom';

const RecipesListItem = ({ history, match, recipe }) => {
  const {
    recipeId,
    name,
    difficulty,
    prepTime,
    cookTime,
    makes,
    image
  } = recipe;

  const handleOnClick = () => {
    history.push(`${match.url}/${recipeId}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        border: '1px solid black',
        width: 200,
        height: 200,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={handleOnClick}
    >
      <span>{name}</span>
      <span>{difficulty}</span>
      <span>{prepTime}</span>
      <span>{cookTime}</span>
      <span>{makes}</span>
    </div>
  );
};

export default withRouter(RecipesListItem);
