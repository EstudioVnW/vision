import * as S from "./styles";

const InputRadio = ({ title, label, value, noBorder , inlineBlock}) => {
  return (
    <>
      {title && <S.TitleInputRadio>{title}</S.TitleInputRadio>}
      <S.ContainerInputRadio noBorder inlineBlock>
        <S.Input
          type="radio"
          id={label}
          name="gender"
          value={value}
          required
        />
        <S.Label for={label}>{label}</S.Label>
      </S.ContainerInputRadio>
    </>
  );
};

export default InputRadio;
