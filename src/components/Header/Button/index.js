import * as S from "./style";
import  Logo  from "../../../assets/logo.svg";
const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Btn href="/">Voltar</S.Btn>
      <S.Container>
        <S.Logo src={Logo} />
        
      </S.Container>
    </S.HeaderContainer>
  );
};
export default Header;
