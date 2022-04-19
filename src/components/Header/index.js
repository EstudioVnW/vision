import * as S from "./styles";
import  Logo  from "../../assets/logo.svg";
import Button from "./Button";
const Header = () => {
  return (
    <S.HeaderContainer>
        <Button/>
      <S.Container>
        <S.Logo src={Logo} alt="Logo"/>
      </S.Container>
    </S.HeaderContainer>
  );
};
export default Header;
