import styled from "styled-components";
import Checked from "../../../assets/Vector.svg";


export const TitleInputRadio= styled.p`
font-size: 24px;
font-family: "Montserrat", sans-serif;
`


export const ContainerInputRadio = styled.div`
  color: #2c5fa1;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  display: ${props => props.block ? 'block': 'inline-block'};
`;

export const Input = styled.input`
  padding: 0.4rem;
  margin: 0.5rem 0.5rem 0;
  border: 3px solid #2C5FA1;
  border-radius: 50%;
  font-size: 12px;
  color: #2c5fa1;
  background-color: #fff;
  -webkit-appearance: none;

  :checked {
    background-color: #5886ea;
    background-size: 70%;
    background-image: url(${Checked});
    background-repeat: no-repeat;
    background-position-x: 1.8px;
    background-position-y: 3px;
    color: #fff;
  }
`;
