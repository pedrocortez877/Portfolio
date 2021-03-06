import React from 'react';

import { 
  Container
} from './styles';

import { NavBar } from '../../Components/Navbar';
import { HomeComponent } from '../../Components/Home';
import { CurricularSchedule } from '../../Components/CurricularSchedule';
import { ProfessionalActuation } from '../../Components/ProfessionalActuation';
import { ProjectsPerformance } from '../../Components/ProjectsPerformance';
import { Footer } from '../../Components/Footer';

export function HomePage(){
  return(
    <Container>
      <NavBar />
      <HomeComponent />
      <CurricularSchedule />
      <ProfessionalActuation />
      <ProjectsPerformance />
      <Footer />
    </Container>
  );
}