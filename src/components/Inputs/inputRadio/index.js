import * as S from "./styles";
const InputRadio = () => {
  return (
      <>
        <S.TitleInputRadio>O cadastro será feito por:</S.TitleInputRadio>
    <S.ContainerInputRadio>
      

      <S.Input type="radio" id="cpf" name="gender" value="CPF" />
      <label for="cpf">CPF</label>

      <S.Input type="radio" id="cnpj" name="gender" value="CNPJ" />
      <label for="cnpj">CNPJ</label>
    </S.ContainerInputRadio>
    </>
  );
  
};
export default InputRadio;
