import React from 'react';

import PageContainer from '../../components/PageContainer'
import IngredientSearchBar from '../../components/IngredientSearchBar';
import SelectedIngredientsList from '../../components/SelectedIngredientsList';
import IngredientsList from '../../components/IngredientsList';
import SearchRecipesButton from '../../components/SearchRecipesButton';
import { HeaderContainer } from './HomePage.styles';

const HomePage = () => (
  <PageContainer>
    <HeaderContainer>
      <h1>Which ingredients do you have?</h1>
      <IngredientSearchBar />
    </HeaderContainer>
    <SelectedIngredientsList />
    <IngredientsList />
    <SearchRecipesButton />
  </PageContainer>
);

export default HomePage;
