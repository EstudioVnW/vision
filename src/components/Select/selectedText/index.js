
import * as S from "./styles";
import { Close } from '../../../assets';

const SelectedText = ({ text, onClick }) => {
  return (
    <>
      <S.Title>Você selecionou como sua área:</S.Title>
      <S.Content><S.Text>{text}</S.Text> <S.Img src={Close} alt="Fechar" onClick={onClick} /></S.Content>
    </>
  );
};

export default SelectedText;
