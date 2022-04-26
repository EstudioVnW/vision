import { useNavigate } from "react-router-dom";

//Components
import Header from '../../../components/Header';
import Title from '../../../components/Title';
import InputRadio from '../../../components/Inputs/inputRadio';
import Input from '../../../components/Inputs/input/Input';
import Input2 from '../../../components/Inputs/input/Input2';
import Input3 from '../../../components/Inputs/input/Input3';
import BtnProx from '../../../components/Buttons/BtnProx/BtnProx';
import InputNumber from '../../../components/Inputs/inputNumber/index';

import * as S from './styles';

const OngFormScreen = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/cadastro-das-causas');
  }

  const renderCadastro = () => (
    <>
    {/* <S.ContentInput width="31.25rem"> */}
      <InputRadio
        title='O cadastro será feito por:'
        label="CPF"
        value="CPF" inlineBlock/>
      <InputRadio
        label="CNPJ"
        value="CNPJ"
        noBorder inlineBlock
      />
    {/* </S.ContentInput> */}
      <S.Container>
        <S.BoxCpf>
          <Input2
            place=" CPF"
            mask="999.999.999-99"
            noBorder
          />
        </S.BoxCpf>

        <S.divForm >
          <Input
            place=" Email para contato da Ong *"
            mask=""
          />
          <S.BoxTeste className="row1">
            <Input
              place=" Ano de início das atividades *"
              mask=""
            />
          </S.BoxTeste>
        </S.divForm>

        <S.divForm >
          <S.Div >
            <Input2
              place=" CEP "
              mask=""
            />
          </S.Div>

          <S.row2 >
            <Input2
              place=" Cidadde *"
              mask=""
            />
          </S.row2>

          <S.row2 >
            <Input2 
              place=" Comunidade *"
              mask=""
            />
          </S.row2>
        </S.divForm>

        <S.divForm>
          <Input
            place=" Endereço da ONG *"
            mask=""
          />
          <S.row1 div >
            <Input
              place="  N° *"
              mask=""
            />
          </S.row1>
        </S.divForm>

        <S.divForm >
          <Input
            place=" Ponto de Referência *"
            mask=""
          />
          <S.row1 >
            <Input
              place=" Telefone Celular *"
              mask="(99)99999-9999"
            />
          </S.row1>
        </S.divForm>

        <S.divForm>
          <Input
            place=" Site "
            mask=""
          />
          <S.row1>
            <Input
              place=" Redes Sociais"
              mask=""
            />
          </S.row1>
        </S.divForm>

        <S.Div>
          <S.text2 h1>A ONG é ligada a alguma instituição politica/ instituição religiosa?</S.text2>
        </S.Div>

        <InputRadio
          label="Sim"
          value="sim" />
        <InputRadio
          label="Não"
          value="nao" />

        <S.Div>
          <S.text2 h1 >Informações de cadastro na Plataforma</S.text2>
        </S.Div>

        <S.divForm>
          <Input3
            place="Nome do responsável pelo cadastro"
          />
          <S.row1>
            <Input3
              place="Cargo do responsável pelo cadastro *"
            />
          </S.row1>
        </S.divForm>

        <S.divForm>
          <Input3
            place=" Email *"
            mask=""
          />
          <S.row1>
            <Input3
              place=" Telefone ou Celular *"
              mask="(99)99999-9999"
            />
          </S.row1>
        </S.divForm>

        <S.divForm>
          <Input2
            place=" CPF *"
            mask="999.999.999-99"
          />
        </S.divForm>

        <S.btn >
          <BtnProx onClick={handleSubmit}/>
        </S.btn>

        <S.divForm>
          <Input2
            place=" Criar Senha *"
            mask="********"
          />
          <S.row1>
            <Input2
              place=" Confirmar Senha *"
              mask="********"
            />
          </S.row1>
        </S.divForm>
      </S.Container></>
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
