import React from 'react';
import { NavBar } from '../../Components/Navbar';

import { 
  Container,
  HomeSection,
  ImageArea,
  MyImage,
  AreaMyHistory,
  TextBold,
  TextSemiBold,
  SocialNetworksArea,
  TextNormal,
  Icons,
  Line,
  CurricularScheduleSection,
  LanguageAndTecnologiesArea,
  AreasInScheduleSection,
  TitleCurricularScheduleSection,
  TitleAreaCurricularScheduleSection,
  LanguageAndTecnology
} from './styles';

import MyPhoto from '../../Assets/myImage.jpeg';
import Linkedin from '../../Assets/linkedin.png';
import Facebook from '../../Assets/facebook.png';
import GitHub from '../../Assets/github.png';
import Programming from '../../Assets/programacao.png';
import LinguagemCSharp from '../../Assets/linguagem_csharp.png';
import LinguagemJava from '../../Assets/linguagem_java.png';
import LinguagemJS from '../../Assets/linguagem_js.png';
import LinguagemC from '../../Assets/linguagem_c.png';
import LinguagemSQL from '../../Assets/linguagem_sql.png';
import ReactImage from '../../Assets/react.png';
import SpringImage from '../../Assets/spring.png';
import NodeJSImage from '../../Assets/nodejs.png';
import JenkinsImage from '../../Assets/jenkins.png';
import DockerImage from '../../Assets/docker.png';
import PooImage from '../../Assets/poo.png';
import TddImage from '../../Assets/tdd.png';
import RestImage from '../../Assets/rest.png';
import ScrumImage from '../../Assets/scrum.png';
import MvcImage from '../../Assets/mvc.png';

export function Home(){
  return(
    <Container>
      <NavBar />
      <HomeSection>
        <ImageArea>
          <MyImage src={MyPhoto} />
        </ImageArea>
        <AreaMyHistory>
          <TextBold>Olá, meu nome é Pedro Cortez.</TextBold> 😉 <br/>
          <TextSemiBold>Estudo programação a mais de 2 anos e hoje atuo como Desenvolvedor Full-stack</TextSemiBold> 🚀 <br />
          <TextSemiBold>Sou formando do curso de Análise e Desenvolvimento de Sistemas do IFTM - Instituto Federal do Triângulo Mineiro</TextSemiBold> <br /> 
          <SocialNetworksArea>
            <TextNormal>Linkedin:</TextNormal>
            <Icons src={Linkedin}/>

            <TextNormal>Facebook:</TextNormal>
            <Icons src={Facebook}/>

            <TextNormal>GitHub:</TextNormal>
            <Icons src={GitHub}/>
          </SocialNetworksArea> 
          <Line />
        </AreaMyHistory>
      </HomeSection>
      <CurricularScheduleSection>
        <TitleAreaCurricularScheduleSection>
          <TitleCurricularScheduleSection>Conhecimentos Adquiridos</TitleCurricularScheduleSection>
          <Icons src={Programming} />
        </TitleAreaCurricularScheduleSection>
        <LanguageAndTecnologiesArea>
          <AreasInScheduleSection>
            <TextBold>Linguagens</TextBold>
            <LanguageAndTecnology>
              <TextNormal>C</TextNormal>
              <Icons src={LinguagemC}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>C#</TextNormal>
              <Icons src={LinguagemCSharp}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Java</TextNormal>
              <Icons src={LinguagemJava}/>
            </LanguageAndTecnology>
            
            <LanguageAndTecnology>
              <TextNormal>JavaScript</TextNormal>
              <Icons src={LinguagemJS}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>SQL</TextNormal>
              <Icons src={LinguagemSQL}/>
            </LanguageAndTecnology>
          </AreasInScheduleSection>
          <AreasInScheduleSection>
            <TextBold>Tecnologias</TextBold>

            <LanguageAndTecnology>
              <TextNormal>React</TextNormal>
              <Icons src={ReactImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>NodeJS</TextNormal>
              <Icons src={NodeJSImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Spring</TextNormal>
              <Icons src={SpringImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Docker</TextNormal>
              <Icons src={DockerImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Jenkins</TextNormal>
              <Icons src={JenkinsImage}/>
            </LanguageAndTecnology>
          </AreasInScheduleSection>
          <AreasInScheduleSection>
            <TextBold>Padrões e Métodos</TextBold>

            <LanguageAndTecnology>
              <TextNormal>POO</TextNormal>
              <Icons src={PooImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>TDD</TextNormal>
              <Icons src={TddImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Rest API</TextNormal>
              <Icons src={RestImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Scrum</TextNormal>
              <Icons src={ScrumImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>MVC</TextNormal>
              <Icons src={MvcImage}/>
            </LanguageAndTecnology>
          </AreasInScheduleSection>
        </LanguageAndTecnologiesArea>
      </CurricularScheduleSection>
    </Container>
  );
}

{/* <CurricularScheduleSection>
        <TitleArea>
          <TextBold>Conhecimentos adquiridos</TextBold>
          <Icons src={Programming}/>
        </TitleArea>
        <LanguageAndTecnologiesArea>
          <LanguagesArea>
            <TitleArea>
              <TextBold>Linguagens</TextBold>
            </TitleArea>

            <TextNormal>C</TextNormal>
            <Icons src={LinguagemC}/>

            <TextNormal>C#</TextNormal>
            <Icons src={LinguagemCSharp}/>

            <TextNormal>Java</TextNormal>
            <Icons src={LinguagemJava}/>

            <TextNormal>JavaScript</TextNormal>
            <Icons src={LinguagemJS}/>

            <TextNormal>SQL</TextNormal>
            <Icons src={LinguagemSQL}/>
          </LanguagesArea>
          <TecnologiesArea></TecnologiesArea>
          <DesignStandardsArea></DesignStandardsArea>
        </LanguageAndTecnologiesArea>
      </CurricularScheduleSection> */}