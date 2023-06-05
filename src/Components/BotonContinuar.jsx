import React from 'react';

const BotonContinuar = ({ onClick }) => {
  return (
    <button className='boton' type='submit' onClick={onClick}>
      Continuar
    </button>
  );
};

export default BotonContinuar;