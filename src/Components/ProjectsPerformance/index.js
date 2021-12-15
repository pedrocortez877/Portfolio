import React from 'react';

import { 
  LanguageAndTecnology,
  ProjectsPerformanceSection,
  ProjectsArea,
  Projects,
  ImageProjectArea,
  ImageProject,
  DescriptionProjectArea
} from './styles';

import {
  TextSemiBold,
  TextNormal,
  Icons,
  Title,
  TitleArea,
} from '../../Styles/globalStyles';

import { Image } from '../../Utils/imagesExporter';

export function ProjectsPerformance(){
  return (
    <ProjectsPerformanceSection>
        <TitleArea>
          <Title>Projetos</Title>
          <Icons src={Image.Programming} />
        </TitleArea>
        <ProjectsArea>
          <Projects>
            <ImageProjectArea>
              <ImageProject src={Image.AppRaiseImage}/>
            </ImageProjectArea>
            <DescriptionProjectArea>
              <TextSemiBold>Finalidade</TextSemiBold>
              <TextNormal>Sistema de avaliação de produtos. Contém mais de 4000 produtos avaliados.</TextNormal>
              <TextSemiBold>Tecnologias utilizadas</TextSemiBold>
              <LanguageAndTecnology>
                <TextNormal>React Native</TextNormal>
                <Icons src={Image.ReactImage}/>
              </LanguageAndTecnology>
              <LanguageAndTecnology>
                <TextNormal>NodeJS</TextNormal>
                <Icons src={Image.NodeJSImage}/>
              </LanguageAndTecnology>
              <LanguageAndTecnology>
                <TextNormal>VueJS</TextNormal>
                <Icons src={Image.VueImage}/>
              </LanguageAndTecnology>
              <LanguageAndTecnology>
                <TextNormal>Python</TextNormal>
                <Icons src={Image.PythonImage}/>
              </LanguageAndTecnology>
            </DescriptionProjectArea>
          </Projects>
          <Projects>
            <ImageProjectArea>
              <ImageProject src={Image.SurpassImage}/>
            </ImageProjectArea>
            <DescriptionProjectArea>
              <TextSemiBold>Finalidade</TextSemiBold>
              <TextNormal>Sistema para encontrar, cadastrar e editar areas de esporte em sua localidade.</TextNormal>
              <TextSemiBold>Tecnologias utilizadas</TextSemiBold>
              <LanguageAndTecnology>
                <TextNormal>ReactJS</TextNormal>
                <Icons src={Image.ReactImage}/>
              </LanguageAndTecnology>
              <LanguageAndTecnology>
                <TextNormal>NodeJS</TextNormal>
                <Icons src={Image.NodeJSImage}/>
              </LanguageAndTecnology>
              <LanguageAndTecnology>
                <TextNormal>Typescript</TextNormal>
                <Icons src={Image.TypescriptImage}/>
              </LanguageAndTecnology>
              <LanguageAndTecnology>
                <TextNormal>TypeORM</TextNormal>
                <Icons src={Image.TypeormImage}/>
              </LanguageAndTecnology>
            </DescriptionProjectArea>
          </Projects>
        </ProjectsArea>
      </ProjectsPerformanceSection>
  );
}