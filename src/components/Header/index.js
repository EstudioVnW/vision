import * as S from "./styles";

//Images
import  Seta  from "../../assets/voltar.svg";
import  Logo  from "../../assets/logo.svg";

const Header = () => {
  return (
    <S.HeaderContainer>
      <>
        <S.IconBack alt="Seta" src={Seta}/>
        <S.Btn type="button" href="/">
          Voltar
        </S.Btn>
      </>
      <S.Figure>
        <S.Logo src={Logo} />
      </S.Figure>
    </S.HeaderContainer>
  );
};

export default Header;
