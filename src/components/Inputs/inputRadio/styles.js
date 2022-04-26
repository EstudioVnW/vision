import styled from "styled-components";
import Checked from "../../../assets/Vector.svg";
import { colors } from '../../../styles/Theme';

export const TitleInputRadio= styled.p`
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
`

export const ContainerInputRadio = styled.div`
  margin-bottom:  10px;
  /* max-width: 49%; */
  display: flex;
  align-items: center ;
  color: #2c5fa1;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  /* display: ${props => props.block ? 'block': 'inline-block'}; */
  padding: .15rem .5rem;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
`;

export const Input = styled.input`
  /* padding: 0.4rem; */
  width: .938rem;
  height: .938rem;

  margin-right: .3rem;
  border: 2px solid #2C5FA1;
  border-radius: 50%;
  font-size: 12px;
  color: #2c5fa1;
  background-color: ${colors.white};
  -webkit-appearance: none;

  :checked {
    background-color: #5886ea;
    background-size: 70%;
    /* background-image: url(${Checked}); */
    background-color: ${colors.blue};
    background-repeat: no-repeat;
    background-position-x: 1.8px;
    background-position-y: 3px;
    color: ${colors.white};
  }
`;

export const Label = styled.label`
  font-size: .875rem;
`;