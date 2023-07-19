import React from 'react';
import { Link } from 'react-router-dom';
import '../CSSYLES/navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const navBar = () => {
  return (
    <nav className='contenedor'>
      <ul className='links'>
        <li>
          <Link to="/menu">Inicio</Link>
        </li>
        <li>
          <Link to="/Aboutus">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/Invenario">Inventario</Link>
        </li>
        <li>
          <Link to="/profile"> <FontAwesomeIcon className='Icons' icon={faUser} /></Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default navBar;