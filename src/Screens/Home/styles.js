import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  width: 100vw;
`;

export const HomeSection = styled.div`
  display: flex;

  padding: 70px;
  background-color: #2c2c2c;
`;

export const ImageArea = styled.div`
  flex: 1;
  padding-left: 50px;
`;

export const MyImage = styled.img`
  height: 250px;
  width: 250px;

  border-radius: 50%;
`;

export const AreaMyHistory = styled.div`
  flex: 5;
`;

export const TextBold = styled.strong`
  font-size: 24px;
  font-weight: bold;
  font-family: Poppins;

  margin-bottom: 10px;
`;

export const TextSemiBold = styled.strong`
  font-size: 18px;
  font-family: Poppins;
  line-height: 50px;
`;

export const TextNormal = styled.p`
  font-size: 18px;
  font-family: Poppins;

  margin-right: 10px;
  margin-top: 10px;
`;

export const SocialNetworksArea = styled.div`
  padding-top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Icons = styled.img`
  height: 40px;
  width: 40px;

  margin-right: 30px;
`;

export const Line = styled.div`
  height: 5px;
  
  margin-top: 20px;

  background: rgb(82,0,0);
  background: linear-gradient(90deg, rgba(82,0,0,1) 0%, rgba(108,0,11,1) 35%, rgba(44,44,44,1) 100%);
`;

export const CurricularScheduleSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  background-color: #242424;

  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const LanguageAndTecnologiesArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  margin-top: 50px;
`;

export const TitleAreaCurricularScheduleSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
`;

export const TitleCurricularScheduleSection = styled.strong`
  font-size: 24px;
  font-weight: bold;
  font-family: Poppins;

  margin: 5px;
`;

export const AreasInScheduleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LanguageAndTecnology = styled.div`
  display: flex;
  flex-direction: row;

  padding-bottom: 30px;
`;

export const ProfessionalActuationSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: #2c2c2c;

  padding-right: 50px;
  padding-left: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const TimeLineItem = styled.div`
  padding: 3em 2em 2em;
  position: relative;
  color: rgba(black, .7);
  border-left: 2px solid grey;

  p {
    font-size: 1rem;
  }

  &:before {
    content: '${props => props.dateIs}';
    position: absolute;
    left: 2em;
    font-weight: bold;
    top: 1em;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: .785rem;
  }

  &:after {
    width: 10px;
    height: 10px;
    display: block;
    top: 1em;
    position: absolute;
    left: -7px;
    border-radius: 10px;
    content: '';
    border: 2px solid grey;
    background: #520000;
  }

  &:last-child {
    border-image: linear-gradient(
      to bottom,
      #242424 60%,
      rgba(#242424, 0)) 1 100%
    ;
  }
`;

export const ProjectsPerformanceSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: #242424;

  margin-top: 20px;

  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  margin-top: 20px;
`;

export const ImageProjectArea = styled.div`
  padding-right: 70px;
`;

export const ImageProject = styled.img`
`;

export const DescriptionProjectArea = styled.div`
  max-width: 450px;
  border-right: 4px solid #2c2c2c;
  border-bottom: 4px solid #2c2c2c;
  border-bottom-right-radius: 10px;
`;

export const FriendsFamilyHobbySection = styled.div`
  
`;