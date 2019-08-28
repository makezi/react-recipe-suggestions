import React from 'react';

import IngredientSearchBar from '../components/IngredientSearchBar';
import SelectedIngredientsList from '../components/SelectedIngredientsList';
import IngredientsList from '../components/IngredientsList';

const HomePage = () => (
  <div>
    <h1>Which ingredients do you have?</h1>
    <IngredientSearchBar />
    <SelectedIngredientsList />
    <IngredientsList />
  </div>
);

export default HomePage;
