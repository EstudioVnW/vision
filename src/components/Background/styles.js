import styled from "styled-components";

import Img from "../../assets/US001.png";

export const ContainerImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 13vw;
  margin-right: 7vw;
`;

export const BackgIa = styled.div`
  width: 550px;
  height: 730px;
  background-size: cover;
  background-image: url(${Img});
`;

export const TextVi = styled.p`
  color: blue;
`;
