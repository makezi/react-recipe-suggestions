import React from 'react';
import { connect } from 'react-redux';

import {
  addIngredient,
  removeIngredient
} from '../../redux/ingredients/actions';

const IngredientsListItem = ({
  ingredient,
  checked,
  addIngredient,
  removeIngredient
}) => {
  const handleCheckboxChange = () => {
    const { ingredientId } = ingredient;

    checked ? removeIngredient(ingredientId) : addIngredient(ingredientId);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {ingredient.name}
      </label>
    </div>
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
