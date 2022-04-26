import React from 'react'
import './Input.css'
import * as S from './styles'
import styled from 'styled-components'

const Input = ( {mask,value, place,width}) => {
    return(
        <S.Container>
        <S.Input   id="InputText" width={width} placeholder = {place} mask={mask} value={value} />
        </S.Container>
    );
}


export default Input;