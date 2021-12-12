import React from 'react';
import { NavBar } from '../../Components/Navbar';

import { 
  Container,
  HomeSection,
  MyImage,
  CardMyHistory
} from './styles';

export function Home(){
  return(
    <Container>
      <NavBar />
    </Container>
  );
}