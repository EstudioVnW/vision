import styled from "styled-components";
import { colors } from '../../styles/Theme';

export const HeaderContainer = styled.div`
  padding-left: 5px;
  padding-bottom: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ContentBtnBack = styled.div`
  padding-left: 3.75rem;
`;

export const IconBack = styled.img`
  width: 20px;
`;

export const Btn = styled.button`
  color: ${colors.blue};
  padding: 2px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Figure = styled.figure`
  max-width: 1333px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.img`
  width: 170px;
`;
