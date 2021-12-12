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
  LanguageAndTecnology,
  ProfessionalActuationSection,
  TimeLineItem,
  ProjectsPerformanceSection,
  Projects,
  ImageProjectArea,
  ImageProject,
  DescriptionProjectArea
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
import AppRaiseImage from '../../Assets/appRaise.png';

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
      <ProfessionalActuationSection>
        <TitleAreaCurricularScheduleSection>
          <TitleCurricularScheduleSection>Atuação Profissional</TitleCurricularScheduleSection>
          <Icons src={Programming} />
        </TitleAreaCurricularScheduleSection>
        <TimeLineItem dateIs="22/04/2021">
          <TextSemiBold>Estagiário - Desenvolvimento | Consórcio Magalu</TextSemiBold>
          <TextNormal>Ingressei como Estagiário em desenvolvimento no Consórcio Magalu no dia 22/04/2021. Ao iniciar o estágio tive um treinamento sobre todas
                      as regras de negócio que envolviam a empresa, passando por todas as areas conhecendo suas especificidades afim de facilitar no desenvolvimento de soluções.
                      Após isto tive um treinamento em todas as tecnologias utilizadas pela empresa. Iniciei com SQL Server, onde tive um curso intensivo do básico ao avançado.
                      Após isto iniciei um treinamento de C#, pegando desde suas versões mais antigas (Asp.net - Full Framework), até suas implementações mais recenter como .NET 5+.
                      Finalizado o treinamento de C#, iniciei um treinamento de JavaScript abordando React, React Native e NodeJS. Neste ainda pude aprimorar experiências utilizando Express, Sequelize e Swagger.
                      Após todos os módulos comecei atuar nas demandas da empresa.
          </TextNormal>
        </TimeLineItem>
        <TimeLineItem dateIs="24/11/2021">
          <TextSemiBold>Desenvolvedor Full-Stack | Consórcio Magalu</TextSemiBold>
          <TextNormal>Fui efetivado como Desenvolvedor Full-Stack no Consórcio Magalu no dia 24/11/2021. Após o estágio realizado com sucesso trabalhando com as ferramentas citadas acima,
                      trabalhei em implementações importantes envolvendo todas estas tecnologias. Atuando agora na implementação do PIX.
          </TextNormal>
        </TimeLineItem>
        <Line />
      </ProfessionalActuationSection>
      <ProjectsPerformanceSection>
        <TitleAreaCurricularScheduleSection>
          <TitleCurricularScheduleSection>Projetos</TitleCurricularScheduleSection>
          <Icons src={Programming} />
        </TitleAreaCurricularScheduleSection>
        <Projects>
          <ImageProjectArea>
            <ImageProject src={AppRaiseImage}/>
          </ImageProjectArea>
          <DescriptionProjectArea>
            <TextNormal>
            AppRaise é um sistema avançado de avaliação de produtos que reune milhares de opções
            para que os usuários consigam ser influenciados em sua compra de forma positiva.
            O aplicativo consiste em uma 
            plataforma que reúne milhares de produtos com suas características e 
            avaliações, direcionando o usuário sobre suas compras. 
            O intuito é possibilitar ao usuário adicionar sua própria avaliação ao 
            produto, possibilitar ao usuário comentar em um devido produto informando 
            sua satisfação ou insatisfação com sua compra, entre diversas outras 
            funcionalidades que foram implementadas. 
            A aplicação foi desenvolvida em React native para a construção da interface. NodeJS para o Back-end da aplicação.
            Python para o algoritmo de webscraping(Responsável por mapear todos os produtos da nossa base) e VueJS para a area administrativa.
            Desenvolvido por: Pedro Cortez, Gustavo Bessa e Rafael Silveira
            </TextNormal>
          </DescriptionProjectArea>
        </Projects>
      </ProjectsPerformanceSection>
    </Container>
  );
}