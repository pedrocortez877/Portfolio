import React from 'react';

import {
  Nav,
  NavLink,
  NavMenu
} from './styles';

export function NavBar(){

  function handleScrollToSection(params){
    switch(params){
      case 0:
        window.scrollTo({
          top: 120,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 1:
        window.scrollTo({
          top: 480,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 2:
        window.scrollTo({
          top: 960,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 3:
        window.scrollTo({
          top: 1500,
          left: 0,
          behavior: 'smooth'
        });
        break;
      default:
        break
    }
  }
  return (
    <Nav>
      <NavMenu>
          <NavLink onClick={()=> handleScrollToSection(0)} activeStyle>
              Home
          </NavLink>
          <NavLink onClick={()=> handleScrollToSection(1)}  activeStyle>
              Itinerário Formativo
          </NavLink>
          <NavLink onClick={()=> handleScrollToSection(2)}  activeStyle>
              Atuação Profissional
          </NavLink>
          <NavLink onClick={()=> handleScrollToSection(3)}  activeStyle>
              Projetos
          </NavLink>
      </NavMenu> 
    </Nav> 
  );
}