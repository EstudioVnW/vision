import styled from "styled-components";
import { colors } from '../../../styles/Theme';

export const ContainerButton = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  img {
    width: 20px;
  }

  button {
    color: ${colors.blue};
    background-color: #fff;
    border: none;
    padding: 2px;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
  }
`;
