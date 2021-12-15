import React from 'react';

import {
  CurricularScheduleSection,
  LanguageAndTecnologiesArea,
  AreasInScheduleSection,
  TitleCurricularScheduleSection,
  TitleAreaCurricularScheduleSection,
  LanguageAndTecnology,
} from './styles';

import {
  TextBold,
  TextNormal,
  Icons
} from '../../Styles/globalStyles';

import { Image } from '../../Utils/imagesExporter';

export function CurricularSchedule() {
  return (
    <CurricularScheduleSection>
        <TitleAreaCurricularScheduleSection>
          <TitleCurricularScheduleSection>Conhecimentos Adquiridos</TitleCurricularScheduleSection>
          <Icons src={Image.Programming} />
        </TitleAreaCurricularScheduleSection>
        <LanguageAndTecnologiesArea>
          <AreasInScheduleSection>
            <TextBold>Linguagens</TextBold>
            <LanguageAndTecnology>
              <TextNormal>C</TextNormal>
              <Icons src={Image.LinguagemC}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>C#</TextNormal>
              <Icons src={Image.LinguagemCSharp}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Java</TextNormal>
              <Icons src={Image.LinguagemJava}/>
            </LanguageAndTecnology>
            
            <LanguageAndTecnology>
              <TextNormal>JavaScript</TextNormal>
              <Icons src={Image.LinguagemJS}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>SQL</TextNormal>
              <Icons src={Image.LinguagemSQL}/>
            </LanguageAndTecnology>
          </AreasInScheduleSection>
          <AreasInScheduleSection>
            <TextBold>Tecnologias</TextBold>

            <LanguageAndTecnology>
              <TextNormal>React</TextNormal>
              <Icons src={Image.ReactImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>NodeJS</TextNormal>
              <Icons src={Image.NodeJSImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Spring</TextNormal>
              <Icons src={Image.SpringImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Docker</TextNormal>
              <Icons src={Image.DockerImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Jenkins</TextNormal>
              <Icons src={Image.JenkinsImage}/>
            </LanguageAndTecnology>
          </AreasInScheduleSection>
          <AreasInScheduleSection>
            <TextBold>Padrões e Métodos</TextBold>

            <LanguageAndTecnology>
              <TextNormal>POO</TextNormal>
              <Icons src={Image.PooImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>TDD</TextNormal>
              <Icons src={Image.TddImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Rest API</TextNormal>
              <Icons src={Image.RestImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>Scrum</TextNormal>
              <Icons src={Image.ScrumImage}/>
            </LanguageAndTecnology>

            <LanguageAndTecnology>
              <TextNormal>MVC</TextNormal>
              <Icons src={Image.MvcImage}/>
            </LanguageAndTecnology>
          </AreasInScheduleSection>
        </LanguageAndTecnologiesArea>
      </CurricularScheduleSection>
  );
}