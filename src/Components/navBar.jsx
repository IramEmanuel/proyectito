import React from 'react';
import { Link } from 'react-router-dom';
import '../CSSYLES/navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import Gestor from '../images/'
const navBar = () => {
  return (
    <nav className='contenedor'>
      <img src={Gestor} alt="" />
      <ul className='links'>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Aboutus">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/contact"> <FontAwesomeIcon className='Icons' icon={faUser} /></Link>
        </li>
        <li>
          <Link to="/contact"> <FontAwesomeIcon className='Icons' icon={faSearch} /></Link>
        </li>
      </ul>
    </nav>
  );
};

export default navBar;