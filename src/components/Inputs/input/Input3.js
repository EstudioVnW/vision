import React from "react";
import "./Input.css";
import * as S from "./styles";

const Input = ({ mask, value, place, width, noBorder }) => {
  return (
    <S.Container>
      <S.Input
        id="InputText3"
        width={width}
        placeholder={place}
        mask={mask}
        value={value}
        noBorder={noBorder}
      />
    </S.Container>
  );
};

export default Input;