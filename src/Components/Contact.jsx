import React from 'react';
import '../CSSYLES/contact.css'
import NavBar from './navBar';
import Fother from './foother';
import logo from '../images/5.png'; // Ruta de la imagen SVG de tu logo
const Contact = () => {
    const Bar = ({ text, url }) => {
     return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="bar">
        {text}
       </a>
      );
  };
  return (
      <>
      <NavBar />
      <div className="container4">
        <div className="logo-circle">
            <img src={logo} alt="Logo" />
        </div>
      <div className="bar-list">
      <Bar text="Red social 1" url="https://ejemplo1.com" />
      <Bar text="Red social 2" url="https://ejemplo2.com" />
      <Bar text="Red social 3" url="https://ejemplo3.com" />
      </div>
    </div>
      <Fother />
      </>
  );
};

export default Contact;