import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const BoxOne = styled.div`
  display: flex;
  background-color: #fff;
  margin-left: 8rem;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  border-radius: 40px 40px 0 40px;
  width: 46rem;
  padding: 1.5rem;
  padding-bottom: 3rem;
  border: 5px solid transparent;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #fff, #98fb98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const BoxTwo = styled.div`
  width: 46rem;
  display: flex;
  background-color: white;
  margin-left: 8rem;
  display: flex;
  border: 2px solid green;
  flex-wrap: wrap;
  padding: 2.5rem;
  border-radius: 40px 40px 0 40px;
  margin-top: 1rem;
  border: 5px solid transparent;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #fff, #98fb98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const BoxThree = styled.div`
  display: flex;
  background-color: white;
  display: flex;
  border: 2px solid green;
  margin-left: 8rem;
  flex-wrap: wrap;
  padding: 1.5rem;
  border-radius: 40px 40px 0 40px;
  width: 46rem;
  margin-top: 1rem;
  border: 5px solid transparent;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #fff, #98fb98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const BoxFor = styled.div`
  display: flex;
  background-color: white;
  display: flex;
  border: 2px solid green;
  margin-left: 8rem;
  flex-wrap: wrap;
  padding: 1.5rem;
  border-radius: 40px 40px 0 40px;
  width: 46rem;
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
  margin-right: 5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  height: 100vh;
`;

export const BtnCadastro = styled.button`
  border-radius: 56px;
  background-color: #2c5fa1;
  color: #fff;
  border: none;
  width: 13vw;
  height: 9vh;
  padding: 1rem;
  font-size: 25px;
  display: flex;
  cursor: pointer;
  font-family: "Sf Pro Regular";
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2rem;
`;
