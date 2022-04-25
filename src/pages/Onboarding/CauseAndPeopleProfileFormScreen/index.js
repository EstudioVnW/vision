
import React from 'react';

//Components
import Header from '../../../components/Header';
import Title from '../../../components/Title';
import InputRadio from '../../../components/Inputs/inputRadio';
import SelectedText from '../../../components/Select/selectedText';


import * as S from './styles';

const CauseAndPeopleProfileFormScreen = () => {
  const listCauses = [
    'Erradicação da pobreza',
    'Fome Zero e agricultura sustentável',
    'Boa súde e bem-estar',
    'Eucação de qualidade',
    'Iualdade de gênero',
    'Água limpa e saneamento',
    'Energia acessível e limpa',
    'Emprego digno e crescimento econômico', 
    'Indústria inovação e infraestrutura',
    'Redução das desigualdades',
    'Ciddes e comunidades sustentáveis',
    'Consumo e produção responsáveis',
    'Combate às alterações climáticas',
    'Vida na água, Vida terrestre',
    'Paz, justiça e instituição eficazes',
    'Parcerias e meios de implementação'
  ];

  const listAssistedNumbers = [
    'até 50',
    '200 a 300',
    '50 a 100',
    '300 a 400',
    '100 a 200',
    '400 a 500'
  ];

  const listGenderOfPeople = [
    'Mulheres Cis',
    'Homens Cis',
    'Mulheres Trans',
    'Homens Trans',
    'Não-Binárias'
  ];

  const listAge = [
    'Bebês - 0 a 3 anos',
    'Jovens - 19 a 29 anos',
    'Crianças - 4 a 12 anos',
    'Adultos - 30 a 60 anos',
    'Adolescentes - 13 a 18 anos',
    'Idosos - 60+ anos'
  ];

  const renderOccupationArea = () => (
    <S.Content>
      <S.Title>Área de atuação</S.Title>
      <S.Title>Você marcou a opção "outros", qual seria a outra Área de atuação?:</S.Title>
      <SelectedText text='Empoderamento feminino' />
    </S.Content>
  );

  const renderCausesOfActing = () => (
    <S.Content>
      <S.Title withSubtitle>Causa de atuação</S.Title>
      <S.Subtitle>É possível escolher mais de uma opção</S.Subtitle>
      <S.ContentCauses>
        {listCauses.map(item => (
          <InputRadio
            label={item}
            value="CPF"
          />
        ))}
      </S.ContentCauses>
    </S.Content>
  );

  const renderAssistedNumbers = () => (
    <S.Content>
      <S.Title>Número de assistidos pela ONG</S.Title>
      <S.ContentCauses width='30%'>
        {listAssistedNumbers.map(item => (
          <InputRadio
            label={item}
            value="CPF"
          />
        ))}
      </S.ContentCauses>
    </S.Content>
  )

  const renderGenderOfPeople = () => (
    <S.Content>
      <S.Title withSubtitle>Gênero das pessoas assistidas pela ONG</S.Title>
      <p>É possível escolher mais de uma opção</p>
      {listGenderOfPeople.map(item => (
        <InputRadio
          label={item}
          value="CPF"
        />
      ))}
    </S.Content>
  )

  const renderFaixaEtaria = () => (
    <S.Content>
      <S.Title>Faixa etária dos assistidos</S.Title>
      {listAge.map(item => (
        <InputRadio
          label={item}
          value="CPF"
        />
      ))}
    </S.Content>
  )

  return (
    <>
       <Header />
     <S.Main>
        <Title />
        {/* {renderOccupationArea()} */}
        {renderCausesOfActing()}
        {renderAssistedNumbers()}
        {/* {renderGenderOfPeople()}
        {renderFaixaEtaria()} */}
      </S.Main> 
      <p>oi</p>
    </>
  );
}

export default CauseAndPeopleProfileFormScreen;
