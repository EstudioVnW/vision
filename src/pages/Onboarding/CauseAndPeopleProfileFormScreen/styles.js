import styled from 'styled-components';
import { colors } from '../../../styles/Theme';

export const Main = styled.main`
  padding-left: 6%;

  @media screen and (min-width: 1024px) {
    padding-left: calc((100% - 940px)/2);
    padding-right: calc((100% - 940px)/2);
  }
`;

export const Content = styled.div`
  padding-bottom: 50px;
`;

export const Title = styled.h3`
  padding-bottom: ${props => props.withSubtitle ? '.625rem' : '1.25rem'};
  font-size: 1.075rem;
  font-family: "SF Pro Regular";
  color: ${colors.black};
  font-weight: 500;
`;

export const Subtitle = styled.p`
  padding: 0rem 0 1.75rem .75rem;
  font-size: .85rem;
  font-family: "SF Pro Regular";
  color: ${colors.black};
  font-weight: 500;
`;

export const ContentCauses = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: .25rem;
  width: ${props => props.width};
`;
