import React from 'react'
import './BtnProx.css'

const BtnProx = ({ onClick }) => {
  return (
    <button id="enviar" onClick={onClick}>Próximo</button>
  );
}

export default BtnProx;