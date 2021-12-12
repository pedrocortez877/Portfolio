import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;

  width: 100vw;
  height: 85px;

  border-bottom: 3px solid rgba(82,0,0,1);
  padding: 30px;
`;

export const NavLink = styled(Link)`
  color: #c2c2c2;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;