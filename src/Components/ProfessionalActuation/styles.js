import styled from "styled-components";

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
