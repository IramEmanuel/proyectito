import React from 'react';
import '../CSSYLES/inventario.css'
import NavBar from './navBar';
import Fother from './foother';
const Inventario = () => {
  return (
  <div className='invetario_body'>
    <NavBar/>
      <div className='Perfil_fondo'></div>
        <div className='Contenedor_perfil'>
          <div className='Imagen_perfil'/>
          <div className='informacion_usuario'>
          <div className='Informacion_perfil'>
            Iram emanuel gordillo
          </div>
          <div className='Ubicacion_perfil'>
            Tuxtla Gutierrez. Chiapas
          </div>
          </div>
          <button className='Edit_perfil'>Editar perfil</button>
        </div>
        
    <Fother/>
  </div>
  
  );
};

export default Inventario;