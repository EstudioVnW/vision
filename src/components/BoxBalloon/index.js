import React from "react";
import * as S from "./styles";

import "./style.css";

export default function BemVindo() {
  return (
    <S.Container>
      <S.BoxOne>
        <S.Paragraph>E aí, tudo tranquilo?</S.Paragraph>
        <S.Paragraph>
          <a href="#">Eu sou a Vi,</a> a assistente virtual do Vision
        </S.Paragraph>
      </S.BoxOne>
      <S.BoxTwo>
        <S.Paragraph>
          Todas as informações que você colocar aqui são para o cadastro da sua
          ONG na plataforma e poderão te qualificar para as oportunidades
          oferecidas pelo Vision.
        </S.Paragraph>
      </S.BoxTwo>
      <S.Boxthree>
        <S.Paragraph>
          Pode ficar tranquilo, só a gente terá acesso a suas informações.
        </S.Paragraph>
      </S.Boxthree>
      <S.BoxOne>
        <S.Paragraph>
          Então preencha com bastante atenção. Vamos lá!
        </S.Paragraph>
      </S.BoxOne>
      <S.BoxButton>
        <S.BtnCadastro>Iniciar cadastro</S.BtnCadastro>
      </S.BoxButton>
    </S.Container>
  );
}
