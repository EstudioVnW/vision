import * as S from "./styles";
import { useNavigate } from 'react-router-dom';

//Images
import  Seta  from "../../assets/voltar.svg";
import  Logo  from "../../assets/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    console.log('handleClick');
    navigate(-1);
  };

  return (
    <S.HeaderContainer>
      <S.ContentBtnBack>
        <S.IconBack alt="Seta" src={Seta}/>
        <S.Btn type="button" onClick={handleGoBack}>
          Voltar
        </S.Btn>
      </S.ContentBtnBack>
      <S.Figure>
        <S.Logo src={Logo} />
      </S.Figure>
      <div/>
    </S.HeaderContainer>
  );
};

export default Header;
