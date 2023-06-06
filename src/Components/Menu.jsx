import React from 'react';
import '../CSSYLES/menu.css'
import NavBar from './navBar';
import Cards from './cards';
import ImagePostHeader from './imagepostheader';
import Cards2 from './othercards';
const Menu = () => {
  return (
  <div className='menuprincipal'>
    <NavBar/>
    <ImagePostHeader/>
    <Cards/>
    <Cards2/>
  
  </div>
  
  );
};

export default Menu;