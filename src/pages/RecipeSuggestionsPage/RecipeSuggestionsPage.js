import React from 'react';

import PageContainer from '../../components/PageContainer';
import RecipesList from '../../components/RecipesList';

const RecipeSuggestionsPage = () => (
  <PageContainer>
    <h1>Suggestions</h1>
    <p>These are your recipe suggestions based on your selected ingredients.</p>
    <RecipesList />
  </PageContainer>
);

export default RecipeSuggestionsPage;
