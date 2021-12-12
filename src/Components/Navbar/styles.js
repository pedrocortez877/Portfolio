import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;

  width: 100vw;
  height: 85px;

  border-bottom: 3px solid #4f0308;
  border-bottom-right-radius: 30px;
  padding: 30px;
`;

export const NavLink = styled(Link)`
  color: #696969;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;

  transition: 0.2s;

  &:hover{
    color: #b0b0b0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;