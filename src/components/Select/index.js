import * as S from "./styles";

import SelectItem from "./selectItem";
import SelectedText from "./selectedText";

const Select = ({
  list,
  selectedOccupationArea,
  handleSelected,
  handleRemove,
}) => {
  return (
    <>
      <S.Title>Área de atuação</S.Title>
      <SelectItem
        title=""
        list={list}
        itemSelected={selectedOccupationArea}
        handleSelected={handleSelected}
        // isError=""
      />
      <S.BoxOthers>
        {selectedOccupationArea === "Outros" && (
          <>
            <S.Title>
              Você marcou a opção “outros”, qual seria a outra Área de atuação ?
            </S.Title>
            <S.Input type="text" placeholder="Digite aqui" />
          </>
        )}
        {selectedOccupationArea && (
          <SelectedText text={selectedOccupationArea} onClick={handleRemove} />
        )}
      </S.BoxOthers>
    </>
  );
};

export default Select;
