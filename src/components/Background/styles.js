import styled from "styled-components";

import Img from "../../assets/US001.png";

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const BackgIa = styled.div`
  width: 650px;
  height: 850px;
  background-size: cover;
  background-image: url(${Img});
  position: absolute;
  bottom: 0;
  @media (max-width: 1440px) {
    width: 610px;
    height: 800px;
  }
`;

export const TextVi = styled.p`
  color: blue;
`;
