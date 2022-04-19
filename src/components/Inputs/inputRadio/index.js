import * as S from "./styles";
const InputRadio = () => {
  return (
    <S.ContainerInputRadio>
      <p>O cadastro será feito por:</p>

      <input type="radio" id="cpf" name="gender" value="CPF" />
      <label for="cpf">CPF</label>

      <input type="radio" id="cnpj" name="gender" value="CNPJ" />
      <label for="cnpj">CNPJ</label>
    </S.ContainerInputRadio>
  );
};
export default InputRadio;
