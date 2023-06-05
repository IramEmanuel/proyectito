import React from 'react';
import '../CSSYLES/menu.css'
import NavBar from './navBar';
import Cards from './cards';
import ImagePostHeader from './imagepostheader';
const Menu = () => {
  return (
  <div className='menuprincipal'>
    <NavBar/>
    <ImagePostHeader/>
    <Cards/>
  </div>
  
  );
};

export default Menu;