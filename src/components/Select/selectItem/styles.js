import styled from 'styled-components';
import { colors } from '../../../styles/Theme';

export const ContentSelect = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  margin-bottom: 0.4rem;

  font-size: 0.75rem;
  color: ${colors.blue};
  font-family: "AvenirLTStd-Black";

  display: flex;
  align-items: center;
  font-family: "AvenirLTStd-Black";
`;

export const Select = styled.div`
  color: #2c5fa1;
  width: 30rem;
  border: 2px solid #c4c4c4;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
`;
export const Ul = styled.ul`
  margin-top: 1rem;
  color: #2c5fa1;
  display: flex;
  flex-direction: column;
  padding: 0.563rem 0;
  width: 30rem;
  max-height: 107.5rem;

  background: white;
  border-radius: 5px;
  border: 1px solid ${colors.inputBorder};

  list-style: none;
  overflow-x: scroll;
  z-index: 1;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Li = styled.li`
  margin-left: 1rem;
  padding: 0.75rem;
  color: #32517a;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;

  :hover {
    background-color: ${colors.grey};
  }
`;

export const Subtitle = styled.h3`
  font-weight: 400;

  font-size: 0.5rem;
  padding: 0.1rem 0 0 0.438rem;
`;

export const Others = styled.div``;
export const OthersTitle = styled.h3``;
export const OthersInput = styled.input``;
