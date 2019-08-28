import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import RecipeSuggestionsPage from './pages/RecipeSuggestionsPage';
import RecipePage from './pages/RecipePage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/recipes" component={RecipeSuggestionsPage} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
      </Switch>
    </div>
  );
}

export default App;
