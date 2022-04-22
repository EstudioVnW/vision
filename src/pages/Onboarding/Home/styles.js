import styled from "styled-components";

import { Backg } from '../../../assets';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${Backg});
  background-repeat: no-repeat;
  background-size: cover;
`;
