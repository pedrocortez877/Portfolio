import React from 'react';

import {
  HomeSection,
  ImageArea,
  MyImage,
  AreaMyHistory,
  SocialNetworksArea
} from './styles';

import {
  TextBold,
  TextSemiBold,
  TextNormal,
  Icons,
  Line
} from '../../Styles/globalStyles';

import { Image } from '../../Utils/imagesExporter';

export function HomeComponent(){
  return(
    <HomeSection>
      <ImageArea>
        <MyImage src={Image.MyPhoto} />
      </ImageArea>
      <AreaMyHistory>
        <TextBold>Olá, meu nome é Pedro Cortez.</TextBold> 😉 <br/>
        <TextSemiBold>Estudo programação a mais de 2 anos e hoje atuo como Desenvolvedor Full-stack</TextSemiBold> 🚀 <br />
        <TextSemiBold>Sou formando do curso de Análise e Desenvolvimento de Sistemas do IFTM - Instituto Federal do Triângulo Mineiro</TextSemiBold> <br /> 
        <SocialNetworksArea>
          <TextNormal>Linkedin:</TextNormal>
          <Icons src={Image.Linkedin}/>

          <TextNormal>Facebook:</TextNormal>
          <Icons src={Image.Facebook}/>

          <TextNormal>GitHub:</TextNormal>
          <Icons src={Image.GitHub}/>
        </SocialNetworksArea> 
        <Line />
      </AreaMyHistory>
    </HomeSection>
  );
}