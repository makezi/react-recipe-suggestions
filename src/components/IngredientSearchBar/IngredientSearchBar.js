import React, { useState } from 'react';
import { connect } from 'react-redux';

import { searchIngredients } from '../../redux/ingredients/actions';
import {
  IngredientSearchBarContainer,
  SearchBar,
  ClearButton
} from './IngredientSearchBar.styles';

const IngredientSearchBar = ({ searchIngredients }) => {
  const [input, setInput] = useState('');

  const handleInputChange = event => {
    const { value } = event.target;
    setInput(value);
    searchIngredients(value);
  };

  const clearInput = () => {
    setInput('');
    searchIngredients('');
  };

  return (
    <IngredientSearchBarContainer>
      <SearchBar
        type="text"
        placeholder="Search ingredients..."
        value={input}
        onChange={handleInputChange}
      />
      {input && <ClearButton onClick={clearInput}>&#10005;</ClearButton>}
    </IngredientSearchBarContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  searchIngredients: searchInput => dispatch(searchIngredients(searchInput))
});

export default connect(
  null,
  mapDispatchToProps
)(IngredientSearchBar);
