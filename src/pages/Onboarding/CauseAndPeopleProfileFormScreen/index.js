import React, { useState } from "react";

//Components
import Header from "../../../components/Header";
import Title from "../../../components/Title";
import InputRadio from "../../../components/Inputs/inputRadio";
import InputNumber from "../../../components/Inputs/inputNumber";
import Button from "../../../components/Buttons";
import Select from "../../../components/Select";

import * as S from "./styles";

const CauseAndPeopleProfileFormScreen = () => {
  const [selectedOccupationArea, setSelectedOccupationArea] =
    useState(undefined);

  const listCauses = [
    'Abrigo e cuidado',
    'Acolhimento temporário e cuidado',
    'Apoio a dependentes químicos',
    'Apoio à pessoas em situação de rua',
    'Apoio à vítimas de violência',
    'Apoio e cuidados com deficientes',
    'Apoio psicológico',
    'Assistência em situações emergenciais',
    'Atividades de Lazer',
    'Combate à desigualdade racial',
    'Combate à desigualdade de gênero',
    'Combate à pobreza',
    'Combate ao abuso infatil/apoio à vítima',
    'Arte',
    'Defesa de direitos/apoio à pessoas LGBTQIA+',
    'Defesa de direitos/terras de povos indígenas',
    'Defesa ou cuidado com animais',
    'Desaparecidos',
    'Educação',
    'Empoderamento Feminino',
    'Estimulo à diversidade',
    'Cultura',
    'Formação de grupos de pessoas em rede de apoio',
    'Formação de grupos de organizações em rede de apoio e networking',
    'Habitação e moradia',
    'Inclusão de pessoas com deficiência ',
    'Inclusão de refugiados',
    'Melhoria em condições de saúde ou higiene',
    'Melhoria em condições de trabalho',
    'Oportunidades e conexão com mercado de trab.',
    'Orientação jurídica',
    'Esporte',
    'Segurança Alimentar',
    'Sustentabilidade',
    'Outros',
  ];

  const listAssistedNumbers = [
    'até 50',
    '200 a 300',
    '50 a 100',
    '300 a 400',
    '100 a 200',
    '400 a 500',
  ];

  const listGenderOfPeople = [
    'Mulheres Cis',
    'Homens Cis',
    'Mulheres Trans',
    'Homens Trans',
    'Não-Binárias',
  ];

  const listAge = [
    'Bebês - 0 a 3 anos',
    'Jovens - 19 a 29 anos',
    'Crianças - 4 a 12 anos',
    'Adultos - 30 a 60 anos',
    'Adolescentes - 13 a 18 anos',
    'Idosos - 60+ anos',
  ];

  const handleSelected = (item) => {
    setSelectedOccupationArea(item);
  };

  const handleRemove = () => {
    setSelectedOccupationArea("");
  };

  const renderOccupationArea = () => (
    <S.Content>
      <Select
        list={listCauses}
        itemSelected={selectedOccupationArea}
        handleSelected={handleSelected}
        selectedOccupationArea={selectedOccupationArea}
        handleRemove={handleRemove}
      />
    </S.Content>
  );

  const renderCausesOfActing = () => (
    <S.Content>
      <S.Title withSubtitle>Causa de atuação</S.Title>
      <S.Subtitle>É possível escolher mais de uma opção</S.Subtitle>
      <S.ContentInput>
        {listCauses.map((item) => (
          <InputRadio label={item} value="" />
        ))}
      </S.ContentInput>
    </S.Content>
  );

  const renderAssistedNumbers = () => (
    <S.Content>
      <S.Title>Número de assistidos pela ONG</S.Title>
      <S.ContentInput width="17.5rem">
        {listAssistedNumbers.map((item) => (
          <InputRadio label={item} value="" />
        ))}
      </S.ContentInput>
      <InputNumber />
    </S.Content>
  );

  const renderGenderOfPeople = () => (
    <S.Content>
      <S.Title withSubtitle>Gênero das pessoas assistidas pela ONG</S.Title>
      <S.Subtitle>É possível escolher mais de uma opção</S.Subtitle>
      <S.ContentInput width="21.563rem">
        {listGenderOfPeople.map((item) => (
          <InputRadio label={item} value="" />
        ))}
      </S.ContentInput>
    </S.Content>
  );

  const renderFaixaEtaria = () => (
    <S.Content>
      <S.Title>Faixa etária dos assistidos</S.Title>
      <S.ContentInput width="31.25rem">
        {listAge.map((item) => (
          <InputRadio label={item} value="CPF" />
        ))}
      </S.ContentInput>
    </S.Content>
  );

  return (
    <>
      <Header />
      <S.Main>
        <Title />
        {renderOccupationArea()}
        {renderCausesOfActing()}
        {renderAssistedNumbers()}
        {renderGenderOfPeople()}
        <S.Footer>
          {renderFaixaEtaria()}
          <Button />
        </S.Footer>
      </S.Main>
    </>
  );
};

export default CauseAndPeopleProfileFormScreen;
