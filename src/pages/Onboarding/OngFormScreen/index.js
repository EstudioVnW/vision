//Components
import Header from '../../../components/Header';
import Title from '../../../components/Title';
import InputRadio from '../../../components/Inputs/inputRadio';

import * as S from './styles';

const OngFormScreen = () => {
  return (
    <>
      <Header/>
      <S.Main>
        <Title />
        <InputRadio/>
      </S.Main>
    </>
  );
}

export default OngFormScreen;