import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: 10vw;
  margin-top: 3vw;
  height: 35vw;
`;

export const BoxOne = styled.div`
  display: flex;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px 15px 0 15px;
  width: 76vh;
  margin-top: 1rem;
  padding: 1.5rem;
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
  border-radius: 15px 15px 0 15px;
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
  border-radius: 15px 15px 0 15px;
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
  font-family: "SF Pro Text", bold;
  a {
    text-decoration: none;
    color: blue;
  }
`;

export const BoxButton = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-left: 6vw;
  display: flex;
  justify-content: center;
`;

export const BtnCadastro = styled.button`
  border-radius: 100px;
  background-color: #4682b4;
  color: #fff;
  border: none;
  width: 16vw;
  padding: 0 4rem 0 4rem;
  font-size: 35px;
  display: flex;
  flex-wrap: wrap;
`;
