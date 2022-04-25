import React from "react";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const ContainerBtn = styled.div`
  width: 41rem;
  margin-top: 2rem;
  display: flex;
`;

const BoxButton = styled.div`
  margin-left: auto;
  max-width: 32rem;
`;

const Btn = styled.button`
  border-radius: 56px;
  background-color: #2c5fa1;
  color: #fff;
  border: none;
  width: 18.75rem;
  height: 5.625rem;
  padding: 1rem;
  font-size: 25px;
  display: flex;
  cursor: pointer;
  font-family: "Sf Pro Regular";
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2rem;
`;

export default function BtnCadastro() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("handleClick");
    navigate("/cadastro-da-organizacao");
  };

  return (
    <ContainerBtn>
      <BoxButton>
        <Btn onClick={handleClick}>Iniciar cadastro</Btn>
      </BoxButton>
    </ContainerBtn>
  );
}
