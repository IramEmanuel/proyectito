import React from 'react';
import { Link } from 'react-router-dom';
import '../CSSYLES/navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const navBar = () => {
  return (
    <nav className='contenedor'>
      <ul className='links'>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/contact"> <FontAwesomeIcon icon={faUser} /></Link>
        </li>
        <li>
          <Link to="/contact"> <FontAwesomeIcon icon={faSearch} /></Link>
        </li>
      </ul>
    </nav>
  );
};

export default navBar;