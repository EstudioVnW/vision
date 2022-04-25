//Components
import Header from '../../../components/Header';
import Title from '../../../components/Title';
import InputRadio from '../../../components/Inputs/inputRadio';

import * as S from './styles';

const OngFormScreen = () => {

  const renderCadastro = () => (
    <div>
      <InputRadio
        title='O cadastro será feito por:'
        label="cpf"
        value="CPF"
      />
      <InputRadio
        label="cnpj"
        value="CNPJ"
      />
    </div>
  );

  return (
    <>
      <Header />
      <S.Main>
        <Title />
        {renderCadastro()}
      </S.Main>
    </>
  );
}

export default OngFormScreen;
