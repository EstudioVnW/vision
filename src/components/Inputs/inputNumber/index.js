import React from 'react';
import './styles.css';

 const InputNumber = () =>{
    return(

            <div class='container'>
            <label class='label'>Outros:</label>
                <span class='number-wrapper'>
                    <input type="number" min="0" placeholder='-' />
                </span>
                <p class='text'>Escreva a quantidade no campo a cima</p>
            </div>

        );


 }

 export default InputNumber; 