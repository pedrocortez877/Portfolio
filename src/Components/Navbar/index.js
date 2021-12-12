import React from 'react';

import {
  Nav,
  NavLink,
  NavMenu
} from './styles';

export function NavBar(){
  return (
    <Nav>
      <NavMenu>
          <NavLink to="/" activeStyle>
              Home
          </NavLink>
          <NavLink to="/" activeStyle>
              Itinerário Formativo
          </NavLink>
          <NavLink to="/" activeStyle>
              Atuação Profissional
          </NavLink>
          <NavLink to="/" activeStyle>
              Projetos
          </NavLink>
          <NavLink to="/" activeStyle>
              Familia/Amigos/Hobby
          </NavLink>
      </NavMenu> 
    </Nav> 
  );
}