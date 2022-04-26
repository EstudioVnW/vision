import * as S from "./styles";

import SelectItem from './selectItem';
import SelectedText from './selectedText';

const Select = ({
    list,
    selectedOccupationArea,
    handleSelected,
    handleRemove
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
      {selectedOccupationArea === 'Outros' && <input type='text' placeholder='Digite aqui' />}
      {selectedOccupationArea && <SelectedText text={selectedOccupationArea} onClick={handleRemove}/>}
    </>
  );
};

export default Select;
