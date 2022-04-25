//Components
import Header from '../../../components/Header';
import Title from '../../../components/Title';
import InputRadio from '../../../components/Inputs/inputRadio';
import Input from '../../../components/Inputs/input/Input'
import BtnProx from '../../../components/Buttons/BtnProx/BtnProx'
import './form.css'

import * as S from './styles';

const OngFormScreen = () => {

  const renderCadastro = () => (
<<<<<<< HEAD
    <><div>
      <InputRadio
        title='O cadastro será feito por:'
        label="cpf"
        value="CPF" />
      <InputRadio
        label="cnpj"
        value="CNPJ" />
    </div><div >

    <div className="Input">
      <Input 
        place=" CPF"
        mask= "999.999.999-99"
      />
    </div>

    <div className="Input divFormC ">
      <Input 
        place=" Email para contato da Ong *"
        mask= ""
      />
      <div className="row1">
      <Input
        place=" Ano de início das atividades *"
        mask= ""
      />
      </div> 
    </div>

    <div className=" Input divFormC ">
     <div className="l3">
      <Input 
          place=" CEP "
          mask= ""
        />
      </div> 
      
      <div className="row2 l3 ">
      <Input
        place=" Cidadde *"
        mask= ""
      />
      </div> 

       <div className="row2 l3">
      <Input className=" l3"
        place=" Comunidade *"
        mask= ""
      />
      </div> 
    </div>

    <div className=" Input divFormC ">
      <Input 
        place=" Endereço da ONG *"
        mask= ""
      />
      <div className="row1">
      <Input
        place="  N° *"
        mask= ""
      />
      </div> 
    </div>

    <div className="l3 Input divFormC ">
      <Input 
        place=" Ponto de Referência *"
        mask= ""
      />
      <div className="row1">
      <Input
        place=" Telefone Celular *"
        mask= "(99)99999-9999"
      />
      </div> 
    </div>

    <div className="l3 Input divFormC ">
      <Input 
        place=" Site "
        mask= ""
      />
      <div className="row1">
      <Input
        place=" Redes Sociais"
        mask= ""
=======
    <div>
      <InputRadio
        title='O cadastro será feito por:'
        label="cpf"
        value="CPF"
>>>>>>> d65378ee952e5ba29b94d1b5bb8c71a644b610c0
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
<<<<<<< HEAD
        label="Não"
        value="nao" />

    <div>
      <h1 className="text2">Informações de cadastro na Plataforma</h1>
    </div>

    <div  className="Input divFormC divt ">
      <Input 
        place="Nome do responsável pelo cadastro"
        mask= ""
=======
        label="cnpj"
        value="CNPJ"
>>>>>>> d65378ee952e5ba29b94d1b5bb8c71a644b610c0
      />
      <div className="row1">
      <Input
        place=" Cargo do responsável pelo cadastro *"
              />
      </div> 
    </div>

    <div className="Input divFormC ">
      <Input 
        place=" Email"
        mask= ""
      />
      <div className="row1">
      <Input
        place=" Telefone Celular"
        mask= ""
      />
      </div> 
    </div>

    <div className="Input divFormC ">
      <Input 
        place=" CPF *"
        mask= "999.999.999-99"
      /> 
    </div>

     <div className="btn">
     <BtnProx/>
      </div> 

    <div className="Input divFormC ">
      <Input 
        place=" Criar Senha *"
        mask= ""
      />
      <div className="row1">
      <Input
        place=" Confirmar Senha *"
        mask= ""
      />
      </div> 
    </div>

    
    
    


      </div></>
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
