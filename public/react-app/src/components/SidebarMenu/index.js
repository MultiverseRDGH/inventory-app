import React from 'react';
import {
  SidebarContainer,
  Icon,
  Close,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarMenuElements';

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <Close />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            All Items
          </SidebarLink>
          <SidebarLink to="/items/orders" onClick={toggle}>
            My Orders
          </SidebarLink>
          <SidebarLink to="/items/new" onClick={toggle}>
            Add Item
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/" onClick={toggle}>
            Contact
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
