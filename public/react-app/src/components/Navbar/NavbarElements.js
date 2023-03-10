import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #0f1123;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  position: sticky;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 5px;
  padding: 15px;
`;

export const HamburgerMenu = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 5px;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  justify-content: space-between;
  height: 80px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 400;
  height: 100%;
  cursor: pointer;
  transition: 0.5s all ease;

  &.active {
    border-bottom: 3px solid #15cdfc;
  }

  &:hover {
    color: #f1ca89;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background: #fff;
  opacity: 90%;
  font-weight: 400;
  padding: 8px;
  color: #000;
  border: none;
  cursor: pointer;
  width: 90px;
  margin-right: 30px;
  text-align: center;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e3c770;
  }
`;
