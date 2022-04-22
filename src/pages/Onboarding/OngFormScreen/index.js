//Components
import Header from '../../../components/Header';
import Title from '../../../components/Title';
import InputRadio from '../../../components/Inputs/inputRadio';

import * as S from './styles';

const OngFormScreen = () => {

  const renderCadstro = () => (
    <div>
      <InputRadio
        title='O cadastro será feito por:'
        id="cpf"
        value="CPF"
      />
      <InputRadio
        id="cnpj"
        value="CNPJ"
      />
    </div>
  );

  return (
    <>
      <Header />
      <S.Main>
        <Title />
        {renderCadstro()}
      </S.Main>
    </>
  );
}

export default OngFormScreen;