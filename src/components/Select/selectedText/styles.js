import styled from "styled-components";
import { colors } from '../../../styles/Theme';

export const Container = styled.div`
  margin-right: 1rem;
  padding: .25rem .5rem;
  width: fit-content;
  display: flex;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
`;

export const Text = styled.p`
  padding-right: .75rem;
  font-size: .75rem ;
  color: ${colors.blue};
`;

export const Img = styled.img`
  width: 10px;
`;
