import React from 'react';

import {
  Nav,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
  HamburgerMenu,
} from './NavbarElements';
import { FaBars, FaBoxOpen } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <FaBoxOpen style={{ fontSize: '35px', paddingLeft: '5px' }} />
          <p style={{ marginLeft: '10px' }}>Inventory App</p>
        </NavLogo>
        <HamburgerMenu>
          <FaBars onClick={toggle} />
        </HamburgerMenu>
        <NavMenu>
          <NavItem>
            <NavLink to="/">All Items</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/items/orders">My Orders</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/items/new">Add Item</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink>Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
