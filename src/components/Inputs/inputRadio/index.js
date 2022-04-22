import * as S from "./styles";

const InputRadio = ({ title, id, value }) => {
  return (
    <>
      {title && <S.TitleInputRadio>{title}</S.TitleInputRadio>}
      <S.ContainerInputRadio>
        <S.Input
          type="radio"
          id={id}
          name="gender"
          value={value}
          required
        />
        <label for={id}>{id}</label>
      </S.ContainerInputRadio>
    </>
  );
};

export default InputRadio;
