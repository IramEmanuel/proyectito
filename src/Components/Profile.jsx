import React from 'react';
import NavBar from './navBar';
import '../CSSYLES/profile.css'
import ImagePostHeader from './imagepostheader';
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
        <div className='body_perfil'>
          <div className='information_perfil'></div>
          <section className='iconos_perfil'>
            <div className='icon1'></div>
            <div className='icon1'></div>
          </section>
        </div>
        <div className='Productos_perfil'>
          <section className='Listed_products'>
            <h1 className='titulo1'></h1>
              <div className='Imagenes_listed'>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
          </section>
          <section className='added_products'>
            <h1 className='titulo2'></h1>
              <div className='Imagenes_added'>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
          </section>
        </div>
    <Fother/>
    </>
  
  );
};

export default Menu;