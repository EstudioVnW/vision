import * as S from "./style";
import  Seta  from "../../../assets/voltar.svg";
const Button = () => {
  return (
    <S.ContainerButton>
      <img alt="Seta" src={Seta}/>
      <button type="button" href="/">
        Voltar
      </button>
    </S.ContainerButton>
  );
};
export default Button;
