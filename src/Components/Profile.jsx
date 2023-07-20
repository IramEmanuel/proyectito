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
        <div className='body_perfil'>
          <div className='datos_usuario'>
            <h1>Informacion de Iram</h1>
            Hi, I'm a person committed to environmental care 
            and the preservation of our planet. Since I was young,
             I have been interested in the environment and have taken
              measures to reduce my carbon footprint and contribute to the s
              ustainability of the planet.
              I consider myself a committed, responsible, and pas
              sionate person about the
              environment. I like to participate in community act
              ivities and volunteer in local environmental
              organizations to help spread the importance of environmental conservation.

          </div>
          <section className='iconos_perfil'>
            <div className='icon'>
            <img  className='img1' src={icono1}  />
            <img  className='img1'src={icono2}  />
            </div>
          </section>
        </div>
        <div className='Productos_perfil'>
          <section className='Listed_products'>
            <h1 className='titulo1'>HOLA</h1>
              <div className='Imagenes_listed'>
                <img  src={producto3} alt="" />
                <img  src={producto4} alt="" />
              </div>
          </section>
          <section className='Listed_products'>
            <h1 className='titulo1'>HOLA</h1>
              <div className='Imagenes_listed'>
                <img src={producto1} alt="" />
                <img src={producto2} alt="" />
              </div>
          </section>
        </div>
        
    <Fother/>
    </>
  
  );
};

export default Menu;