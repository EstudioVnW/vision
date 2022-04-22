import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: -5rem;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  background-color: #fff;
  margin-top: 1rem;
  flex-wrap: wrap;
  border-radius: 40px 40px 0 40px;
  width: 61.5vh;
  padding: 1.9rem;
  border: 5px solid transparent;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #fff, #98fb98);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  @media (max-width: 1440px) {
    width: 55.5vh;
  }
`;

export const BoxVi = styled.div`
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 2.8vh;
  font-family: "SF Pro Regular";
  font-weight: bold;
  font-style: normal;
  a {
    text-decoration: none;
    color: blue;
  }
  @media (max-width: 1440px) {
    font-size: 2.5vh;
  }
`;
