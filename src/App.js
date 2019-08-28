import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import RecipeSuggestionsPage from './pages/RecipeSuggestionsPage';
import RecipePage from './pages/RecipePage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/suggestions" component={RecipeSuggestionsPage} />
          <Route path="/recipe" component={RecipePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
