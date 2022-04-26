import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const Main = styled.main`
  padding-left: 6%;

  @media screen and (min-width: 1024px) {
    padding-left: calc((100% - 940px) / 2);
    padding-right: calc((100% - 940px) / 2);
  }
`;

export const Content = styled.div`
  padding-bottom: 50px;
`;

export const Title = styled.h3`
  padding-bottom: ${(props) => (props.withSubtitle ? ".625rem" : "1.25rem")};
  font-size: 1.075rem;
  font-family: "SF Pro Regular";
  color: ${colors.black};
  font-weight: 500;
`;

export const Subtitle = styled.p`
  padding: 0rem 0 1.75rem 0.75rem;
  font-size: 0.85rem;
  font-family: "SF Pro Regular";
  color: ${colors.black};
  font-weight: 500;
`;

export const ContentInput = styled.div`
  padding-left: .75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0.25rem;
  width: ${(props) => props.width};
`;

export const SelectedText = styled.p`
  padding-right: 0.75rem;
  font-size: 1.5rem;
  color: blue;
`;

export const BoxText = styled.div`
  margin-right: 1rem;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  display: flex;
  justify-content: center;
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  margin-top: 2rem;
`;

export const BoxRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1.5rem;
`;

export const ParagraphSelected = styled.p``;

export const ImgClose = styled.img`
  width: 15px;
`;

export const BtnRemove = styled.button`
  display: flex;
  margin-left: 1.5rem;
`;
