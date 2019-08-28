import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import useDebounce from '../../hooks/useDebounce';
import { searchIngredients } from '../../redux/ingredients/actions';

const INPUT_DEBOUNCE = 500; // 250ms, input delay

const IngredientSearchBar = ({ searchIngredients }) => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, INPUT_DEBOUNCE);

  const handleInputChange = event => {
    const { value } = event.target;
    setInput(value);
  };

  useEffect(() => {
    if (debouncedInput) {
      searchIngredients(debouncedInput);
    }
  }, [debouncedInput]);

  return (
    <form>
      <input
        type="text"
        placeholder="Search ingredients..."
        value={input}
        onChange={handleInputChange}
      />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  searchIngredients: searchInput => dispatch(searchIngredients(searchInput))
});

export default connect(
  null,
  mapDispatchToProps
)(IngredientSearchBar);
