import React from 'react';
import { connect } from 'react-redux';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

import {
  addIngredient,
  removeIngredient
} from '../../redux/ingredients/actions';
import { IngredientsListItemContainer } from './IngredientsListItem.styles';

const IngredientsListItem = ({
  ingredient,
  checked,
  addIngredient,
  removeIngredient
}) => {
  const handleOnClick = () => {
    const { ingredientId } = ingredient;
    checked ? removeIngredient(ingredientId) : addIngredient(ingredientId);
  };

  return (
    <IngredientsListItemContainer onClick={handleOnClick}>
      <span>{ingredient.name}</span>
      {checked ? <FaCheckCircle /> : <FaRegCircle />}
    </IngredientsListItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addIngredient: ingredientId => dispatch(addIngredient(ingredientId)),
  removeIngredient: ingredientId => dispatch(removeIngredient(ingredientId))
});

export default connect(
  null,
  mapDispatchToProps
)(IngredientsListItem);
