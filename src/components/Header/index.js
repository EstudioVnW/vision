import * as S from "./styles";
import { useHistory } from "react-router-dom";

//Images
import  Seta  from "../../assets/voltar.svg";
import  Logo  from "../../assets/logo.svg";

const Header = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  }

  return (
    <S.HeaderContainer>
      <>
        <S.IconBack alt="Seta" src={Seta}/>
        <S.Btn type="button" onClick={handleGoBack}>
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
