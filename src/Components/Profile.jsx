import React from 'react';
import '../CSSYLES/menu.css'
import NavBar from './navBar';
import Cards from './cards';
import ImagePostHeader from './imagepostheader';
import Cards2 from './othercards';
import Fother from './foother';
import imagenMenu from '../images/1.jpg'
const Menu = () => {
  return (
  <div className='menuprincipal'>
    <NavBar/>
    <ImagePostHeader
        image={imagenMenu}
        text="Texto personalizado"
      />
    <p className='Shortby'>Short by</p>
    <Cards/>
    <p className='Recently'>Recently added</p>
    <Cards2/>
    <Fother/>
  
  </div>
  
  );
};

export default Menu;