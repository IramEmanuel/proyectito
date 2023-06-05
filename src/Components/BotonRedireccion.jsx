import React from 'react';

function BotonRedireccion (props){
  return (
    <div className='Redireccion1' type='button' onClick={(onClick)=> props.click(props.children)}>
           {props.children}
    </div>
  );
};

export default BotonRedireccion;