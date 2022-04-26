import React, { useState } from "react";

//Icons
import { Drop } from "../../../assets";

//Style
import * as S from "./styles";

const Select = ({
  title,
  subtitle,
  // isError,
  list,
  itemSelected,
  // placeholder,
  handleSelected,
  iconArrow,
}) => {
  const [isModal, setIsModal] = useState(undefined);

  const handleModal = (e) => {
    e.stopPropagation();

    setIsModal(!isModal);
  };

  const handleIsSelected = (item) => {
    handleSelected(item);
    setIsModal(false);
  };

  return (
    <S.ContentSelect>
      <S.Title>
        {title}
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.Title>

      <S.Select
        placeholder={!!itemSelected}
        // isError={isError}
        onClick={handleModal}
      >
        {itemSelected ? itemSelected : "Click aqui!"}
        {iconArrow && <S.Icon isOpen={isModal} src={Drop} alt="Abrir/Fechar" />}
      </S.Select>

      {isModal && (
        <S.Ul>
          {list.map((item, i) => (
            <S.Li key={i} onClick={() => handleIsSelected(item)}>
              {item}
            </S.Li>
          ))}
        </S.Ul>
      )}

      {/* {isError && <S.MsgError>Campo obrigatório</S.MsgError>} */}
    </S.ContentSelect>
  );
};

export default Select;
