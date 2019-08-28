import React from 'react';

import IngredientSearchBar from '../components/IngredientSearchBar';
import SelectedIngredientsList from '../components/SelectedIngredientsList';
import IngredientsList from '../components/IngredientsList';
import SearchRecipesButton from '../components/SearchRecipesButton';

const HomePage = () => (
  <div>
    <h1>Which ingredients do you have?</h1>
    <IngredientSearchBar />
    <SelectedIngredientsList />
    <IngredientsList />
    <SearchRecipesButton />
  </div>
);

export default HomePage;
