import React from 'react'
import './Input.css'
import InputMask from 'react-input-mask'

const Input = ( {mask,value, place}) => {
    return(
        <InputMask id="InputText"   placeholder = {place} mask={mask} value={value} />
    );
}


export default Input;