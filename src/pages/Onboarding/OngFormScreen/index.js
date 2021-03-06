import { useNavigate } from "react-router-dom";

//Components
import Header from '../../../components/Header';
import Title from '../../../components/Title';
import InputRadio from '../../../components/Inputs/inputRadio';
import Input from '../../../components/Inputs/input/Input';
import BtnProx from '../../../components/Buttons/BtnProx/BtnProx';
import './form.css';

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
          <Input
            place=" CPF"
            mask="999.999.999-99"
            noBorder
          />
        </S.BoxCpf>

        <div className="Input divFormC ">
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
        </div>

        <S.BoxCep className=" Input divFormC ">
          <div className="l3">
            <Input
              place=" CEP "
              mask=""
            />
          </div>

          <div className="row2 l3 ">
            <Input
              place=" Cidadde *"
              mask=""
            />
          </div>

          <div className="row2 l3">
            <Input className=" l3"
              place=" Comunidade *"
              mask=""
            />
          </div>
        </S.BoxCep>

        <div className=" Input divFormC ">
          <Input
            place=" Endereço da ONG *"
            mask=""
          />
          <div className="row1">
            <Input
              place="  N° *"
              mask=""
            />
          </div>
        </div>

        <div className="l3 Input divFormC ">
          <Input
            place=" Ponto de Referência *"
            mask=""
          />
          <div className="row1">
            <Input
              place=" Telefone Celular *"
              mask="(99)99999-9999"
            />
          </div>
        </div>

        <div className="l3 Input divFormC ">
          <Input
            place=" Site "
            mask=""
          />
          <div className="row1">
            <Input
              place=" Redes Sociais"
              mask=""
            />
          </div>
        </div>

        <div>
          <h1 className="text2">A ONG é ligada a alguma instituição politica/ instituição religiosa?</h1>
        </div>

        <InputRadio
          label="Sim"
          value="sim" />
        <InputRadio
          label="Não"
          value="nao" />

        <div>
          <h1 className="text2">Informações de cadastro na Plataforma</h1>
        </div>

        <div className="Input divFormC divt ">
          <Input
            place="Nome do responsável pelo cadastro"
            mask=""
            label="cnpj"
            value=""
          />
          <div className="row1">
            <Input
              place="Cargo do responsável pelo cadastro *"
            />
          </div>
        </div>

        <div className="Input divFormC ">
          <Input
            place=" Email *"
            mask=""
          />
          <div className="row1">
            <Input
              place=" Telefone ou Celular *"
              mask=""
            />
          </div>
        </div>

        <div className="Input divFormC ">
          <Input
            place=" CPF *"
            mask="999.999.999-99"
          />
        </div>

        <div className="btn">
          <BtnProx onClick={handleSubmit}/>
        </div>

        <div className="Input divFormC ">
          <Input
            place=" Criar Senha *"
            mask=""
          />
          <div className="row1">
            <Input
              place=" Confirmar Senha *"
              mask=""
            />
          </div>
        </div>
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
