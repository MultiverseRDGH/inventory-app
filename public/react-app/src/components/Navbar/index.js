import React from "react";

import {
  Nav,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Inventory App</NavLogo>

        <NavMenu>
          <NavItem>
            <NavLink to="/items">All Items</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/items/orders">My Orders</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/items/new">Add Item</NavLink>
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
