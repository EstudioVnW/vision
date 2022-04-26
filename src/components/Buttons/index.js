import React from 'react'

import * as S from "./styles";

const BtnProx = ({ onClick }) => {
  return (
    <S.Button id="enviar" onClick={onClick}>Próximo</S.Button>
  );
}

export default BtnProx;