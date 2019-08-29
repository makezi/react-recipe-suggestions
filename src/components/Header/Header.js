import React from 'react';
import { FaHamburger } from 'react-icons/fa';

import { HeaderContainer, NavLink } from './Header.styles';

const Header = () => (
  <HeaderContainer>
    <h1>MetRecipes</h1>
    <nav>
      <NavLink to="/">
        <FaHamburger />
        <span>Ingredients</span>
      </NavLink>
    </nav>
  </HeaderContainer>
);

export default Header;
