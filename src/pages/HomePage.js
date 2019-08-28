import React from 'react';

import IngredientSearchBar from '../components/IngredientSearchBar';
import IngredientsList from '../components/IngredientsList';

const HomePage = () => (
  <div>
    <h1>Which ingredients do you have?</h1>
    <IngredientSearchBar />
    <IngredientsList />
  </div>
);

export default HomePage;
