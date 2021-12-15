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
  Line,
  ButtonRedirectTo
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
          <ButtonRedirectTo href="https://www.linkedin.com/in/pedro-cortez-616296193/" target="_blank">
            <Icons src={Image.Linkedin}/>
          </ButtonRedirectTo>

          <TextNormal>Facebook:</TextNormal>
          <ButtonRedirectTo href="https://www.facebook.com/pedro.cortez.90813" target="_blank">
            <Icons src={Image.Facebook}/>
          </ButtonRedirectTo>

          <TextNormal>GitHub:</TextNormal>
          <ButtonRedirectTo href="https://github.com/pedrocortez877" target="_blank">
            <Icons src={Image.GitHub}/>
          </ButtonRedirectTo>
        </SocialNetworksArea> 
        <Line />
      </AreaMyHistory>
    </HomeSection>
  );
}