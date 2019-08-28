import React from 'react';

import IngredientSearchBar from '../../components/IngredientSearchBar';
import SelectedIngredientsList from '../../components/SelectedIngredientsList';
import IngredientsList from '../../components/IngredientsList';
import SearchRecipesButton from '../../components/SearchRecipesButton';
import { Container } from './HomePage.styles';

const HomePage = () => (
  <Container>
    <h1>Select your ingredients</h1>
    <IngredientSearchBar />
    <SelectedIngredientsList />
    <IngredientsList />
    <SearchRecipesButton />
  </Container>
);

export default HomePage;
