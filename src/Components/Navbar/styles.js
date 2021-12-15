import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 85px;

  border-bottom: 5px solid #420106;
  border-bottom-right-radius: 30px;
`;

export const NavLink = styled.button`
  color: #696969;
  background-color: transparent;
  border: none;

  padding: 0 1rem;

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

`;