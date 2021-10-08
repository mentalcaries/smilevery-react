import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="menu">
      <NavLink className="menu__item" activeClassName="menu__item_active" exact to="/smilevery-react/">Step 1: Location</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/smilevery-react/shop">Step 2: Shop Selection</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/smilevery-react/templates">Step 3: Create Your Card</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/smilevery-react/confirm">Step 4: Confirm It!</NavLink>
    </nav>
  );
}

export default NavBar;