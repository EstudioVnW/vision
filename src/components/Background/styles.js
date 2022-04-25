import styled from "styled-components";

import Img from "../../assets/US001.png";
import { colors } from '../../styles/Theme';

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const BackgIa = styled.div`
  width: 550px;
  height: 730px;
  background-size: cover;
  background-image: url(${Img});
  position: absolute;
  bottom: 0;
`;

export const TextVi = styled.p`
  color: ${colors.blue};
`;
