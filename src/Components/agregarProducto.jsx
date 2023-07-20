import React from 'react';
import NavBar from './navBar';
import '../CSSYLES/profile.css'
import icono1 from '../images/icon 1.png'
import icono2 from '../images/icon 2.png'
import producto1 from '../images/producto 1.png'
import producto2 from '../images/producto 2.png'
import producto3 from '../images/producto 3.png'
import producto4 from '../images/producto 4.png'
import Fother from './foother';
const Menu = () => {
  return (
    <>
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
    </>
  
  );
};

export default Menu;