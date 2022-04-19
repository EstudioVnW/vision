import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: 10vw;
  margin-top: 3vw;
  height: 35vw;
`;

export const BoxOne = styled.div`
  display: flex;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  border-radius: 40px 40px 0 40px;
  width: 76vh;
  margin-top: 1rem;
  padding: 1.5rem;
  padding-bottom: 3rem;
  border: 5px solid transparent;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #fff, #98fb98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const BoxTwo = styled.div`
  width: 76vh;
  display: flex;
  background-color: white;
  display: flex;
  border: 2px solid green;
  flex-wrap: wrap;
  padding: 1.5rem;
  border-radius: 40px 40px 0 40px;
  margin-top: 1rem;
  border: 5px solid transparent;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #fff, #98fb98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const Boxthree = styled.div`
  display: flex;
  background-color: white;
  display: flex;
  border: 2px solid green;
  flex-wrap: wrap;
  padding: 1.5rem;
  border-radius: 40px 40px 0 40px;
  width: 76vh;
  margin-top: 1rem;
  border: 5px solid transparent;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #fff, #98fb98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const Paragraph = styled.p`
  font-size: 3.4vh;
  font-family: "SF Pro Regular";
  font-weight: bold;
  font-style: normal;
  a {
    text-decoration: none;
    color: blue;
  }
`;

export const BoxButton = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-left: 10vw;
  display: flex;
  justify-content: center;
`;

export const BtnCadastro = styled.button`
  border-radius: 56px;
  background-color: #2c5fa1;
  color: #fff;
  border: none;
  width: 16vw;
  padding: 1rem;
  /* padding: 0 4rem 0 4rem; */
  font-size: 30px;
  display: flex;
  cursor: pointer;
  font-family: "Sf Pro Regular";
  text-transform: uppercase;
  line-height: 36px;
  font-weight: 700;
  letter-spacing: 0.2rem;
`;
