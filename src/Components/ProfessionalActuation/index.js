import React from 'react';

import {
  ProfessionalActuationSection,
  TimeLineItem
} from './styles';

import {
  TextSemiBold,
  TextNormal,
  Icons,
  Title,
  TitleArea,
  Line
} from '../../Styles/globalStyles';

import { Image } from '../../Utils/imagesExporter';

export function ProfessionalActuation(){
  return (
    <ProfessionalActuationSection>
      <TitleArea>
        <Title>Atuação Profissional</Title>
        <Icons src={Image.Programming} />
      </TitleArea>
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
  );
}