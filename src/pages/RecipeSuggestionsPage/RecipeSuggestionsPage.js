import React from 'react';

import RecipesList from '../../components/RecipesList';
import { Container } from './RecipeSuggestionsPage.styles';

const RecipeSuggestionsPage = () => (
  <Container>
    <h1>Suggestions</h1>
    <p>These are your recipe suggestions based on your selected ingredients.</p>
    <RecipesList />
  </Container>
);

export default RecipeSuggestionsPage;
