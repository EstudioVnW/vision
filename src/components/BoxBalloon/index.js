import React from "react";

//Styles
import * as S from "./styles";

//Button
import BtnCadastro from "../Buttons/BtnCadastro";

export default function BemVindo() {
  return (
    <S.Container>
      <S.Box>
        <S.BoxVi>
          <S.Paragraph>E aí, tudo tranquilo?</S.Paragraph>
          <S.Paragraph>
            <a href="#">Eu sou a Vi,</a> a assistente virtual do Vision.
          </S.Paragraph>
        </S.BoxVi>
      </S.Box>
      <S.Box>
        <S.Paragraph>
          Todas as informações que você colocar aqui são para o cadastro da sua
          ONG na plataforma e poderão te qualificar para as oportunidades
          oferecidas pelo Vision.
        </S.Paragraph>
      </S.Box>
      <S.Box>
        <S.Paragraph>
          Pode ficar tranquilo, só a gente terá acesso a suas informações.
        </S.Paragraph>
      </S.Box>
      <S.Box>
        <S.Paragraph>
          Então preencha com bastante atenção. Vamos lá!
        </S.Paragraph>
      </S.Box>
      <BtnCadastro />
    </S.Container>
  );
}
