import styled from "styled-components";

import Img from "../../assets/US001.png";
import { colors } from '../../styles/Theme';

export const ContainerImg = styled.div`
    position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const BackgIa = styled.div`
  width: 650px;
  height: 832px;
  background-size: cover;
  background-image: url(${Img});
  position: absolute;
  right: 180px;
  bottom: 0;

  @media (max-width: 1440px) {
    width: 610px;
    height: 800px;
    right: 80px;
  }

  @media (max-width: 1240px) {
    right: 0;
    width: 33.125rem;
    height: 43.563rem;
    /* width: 500px; */
  }
`;

export const TextVi = styled.p`
  color: ${colors.blue};
`;
