
import * as S from "./styles";
import { Close } from '../../../assets';

const SelectedText = ({ text }) => {
  return (
    <S.Container>
      <S.Text>{text}</S.Text> <S.Img src={Close}  alt="Fechar" />
    </S.Container>
  );
};

export default SelectedText;
