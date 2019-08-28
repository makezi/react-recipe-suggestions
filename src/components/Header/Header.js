import React from 'react';

import { HeaderContainer, NavLink } from './Header.styles';

const Header = () => (
  <HeaderContainer>
    <h1>MetRecipes</h1>
    <nav>
      <NavLink to="/">Ingredients</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
    </nav>
  </HeaderContainer>
);

export default Header;
