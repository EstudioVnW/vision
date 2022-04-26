import styled from 'styled-components';

export const Main = styled.main`
  padding-left: 6%;

  @media screen and (min-width: 1024px) {
    padding-left: calc((100% - 940px)/2);
    padding-right: calc((100% - 940px)/2);
  }
`;

export const BoxCep = styled.div ` ; `
export const BoxTeste = styled.div ` ; `
export const Container = styled.div `  
  width:${props=>props.width  };
  max-width:100%;`
export const BoxCpf = styled.div ` 
  width:20rem;
  border:none;
 `