import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="menu">
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/location">Step 1: Location</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/shop">Step 2: Shop Selection</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/create">Step 3: Create Your Card</NavLink>
      <NavLink className="menu__item" activeClassName="menu__item_active" to="/confirm">Step 4: Confirm It!</NavLink>
    </nav>
  );
}

export default NavBar;