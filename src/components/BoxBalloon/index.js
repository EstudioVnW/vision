import React from "react";
import { useNavigate } from 'react-router-dom';

//Styles
import * as S from "./styles";

export default function BemVindo() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    console.log('handleClick');
    navigate('/cadastro-da-organizacao');
  };

  return (
    <S.Container>
      <S.BoxOne>
        <S.Paragraph>E aí, tudo tranquilo?</S.Paragraph>
        <S.Paragraph>
          <a href="#">Eu sou a Vi,</a> a assistente virtual do Vision.
        </S.Paragraph>
      </S.BoxOne>
      <S.BoxTwo>
        <S.Paragraph>
          Todas as informações que você colocar aqui são para o cadastro da sua
          ONG na plataforma e poderão te qualificar para as oportunidades
          oferecidas pelo Vision.
        </S.Paragraph>
      </S.BoxTwo>
      <S.BoxThree>
        <S.Paragraph>
          Pode ficar tranquilo, só a gente terá acesso a suas informações.
        </S.Paragraph>
      </S.BoxThree>
      <S.BoxFor>
        <S.Paragraph>
          Então preencha com bastante atenção. Vamos lá!
        </S.Paragraph>
      </S.BoxFor>
      <S.BoxButton>
        <S.BtnCadastro onClick={handleClick}>Iniciar cadastro</S.BtnCadastro>
      </S.BoxButton>
    </S.Container>
  );
}
