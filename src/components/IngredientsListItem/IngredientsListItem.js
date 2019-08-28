import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  addIngredient,
  removeIngredient
} from '../../redux/ingredients/actions';

const IngredientsListItem = ({
  ingredient,
  addIngredient,
  removeIngredient
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const { ingredientId } = ingredient;

    checked ? removeIngredient(ingredientId) : addIngredient(ingredientId);
    setChecked(!checked);
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
