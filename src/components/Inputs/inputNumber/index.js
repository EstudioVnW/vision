import React from 'react';
import * as S from "./styles";

 const InputNumber = () =>{
    return(

            <S.container div class='container'>
            <S.label label class='label'>Outros:</S.label>
                <S.numberWrapper span class='number-wrapper'>
                    <S.Input input type="number" min="0" placeholder='-' />
                </S.numberWrapper>
                <S.text p class='text'>Escreva a quantidade no campo a cima</S.text>
            </S.container>

        );


 }

 export default InputNumber; 