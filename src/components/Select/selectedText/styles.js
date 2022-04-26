import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const Title = styled.p`
  padding-top: 1.5rem;
  font-size: 1.5rem;
  color: ${colors.black};
  padding-bottom: 2rem;
`;

export const Content = styled.div`
  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  display: flex;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
`;

export const Text = styled.p`
  padding-right: 0.75rem;
  font-size: 1.2rem;
  color: ${colors.blue};
`;

export const Img = styled.img`
  width: 15px;
`;
