import React from 'react';

import IngredientSearchBar from '../../components/IngredientSearchBar';
import SelectedIngredientsList from '../../components/SelectedIngredientsList';
import IngredientsList from '../../components/IngredientsList';
import SearchRecipesButton from '../../components/SearchRecipesButton';
import { Container, HeaderContainer } from './HomePage.styles';

const HomePage = () => (
  <Container>
    <HeaderContainer>
      <h1>Which ingredients do you have?</h1>
      <IngredientSearchBar />
    </HeaderContainer>
    <SelectedIngredientsList />
    <IngredientsList />
    <SearchRecipesButton />
  </Container>
);

export default HomePage;
