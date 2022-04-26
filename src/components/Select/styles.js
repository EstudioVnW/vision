import styled from "styled-components";
import { colors } from "../../styles/Theme";

export const Title = styled.h3`
  padding-bottom: 1.25rem;
  font-size: 1.5rem;
  font-family: "SF Pro Regular";
  color: ${colors.black};
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  color: ${colors.black};
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  padding-right: 9.2rem;
  border-radius: 8px;
  border: 1px solid ${colors.grey};
  ::placeholder {
    color: ${colors.blue};
  }
`;

export const BoxOthers = styled.div``;
