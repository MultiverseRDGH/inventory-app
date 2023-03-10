import React from 'react';

import {
  Nav,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Inventory App</NavLogo>

        <NavMenu>
          <NavItem>
            <NavLink to="/">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Link</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink>Something here</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
