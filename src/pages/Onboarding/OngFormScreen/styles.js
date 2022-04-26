import styled from 'styled-components';

export const Main = styled.main`
  padding-left: 6%;

  @media screen and (min-width: 1024px) {
    padding-left: calc((100% - 940px)/2);
    padding-right: calc((100% - 940px)/2);
  }
`;

export const divForm = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 10vh;
`
export const Div = styled.div ``

export const row2 = styled.div `
  margin-left: 2rem;
`
export const row1 = styled.div `
  margin-left: 10rem;
  width: 20rem;
`
export const text2 = styled.div `
  margin-top: 13vh;
    margin-bottom: vh;
    font-size: 2.3rem;
    font-family: "SF Pro Regular";
    color: #000000;
    font-weight: 500;
`
export const btn = styled.div `
  margin-left: 40rem;
  margin-bottom: -3rem;
`


export const BoxCep = styled.div ` ; `
export const BoxTeste = styled.div ` ; `
export const Container = styled.div `  
  width:${props=>props.width  };
  max-width:100%;`
export const BoxCpf = styled.div ` 
  width:20rem;
  border:none;
 `