import React from 'react';
import { useNavigate  } from 'react-router-dom';
import BotonContinuar from './BotonContinuar';
import BotonRedireccion from './BotonRedireccion';
import Swal from 'sweetalert2';
import '../CSSYLES/formulario.css'
import { useState, useEffect } from 'react';

const LogIn = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const usuariosCache = localStorage.getItem('usuarios');
    if (usuariosCache) {
      setUsuarios(JSON.parse(usuariosCache));
    }
  }, []);





  const [formValues, setFormValues] = useState({
    input1: '',
    input2: '',
  });
  const handleCancel = () => {
    setFormValues({
      input1: '',
      input2: '',
    });
  };

  const handleRedirectToRegister = () => {
    navigate('/');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

 
  const handleSubmit = (e) => {
  e.preventDefault();
  const values = Object.values(formValues);
  const isValid = values.every((value) => value.length >= 5);

  if (isValid) {
    const { input1, input2 } = formValues;
    const user = usuarios.find((usuario) => usuario.nombre === input1 && usuario.contraseña === input2);

    if (user) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Inicio de sesión exitoso, ¡BIENVENIDO!'
      });
      console.log('Formulario válido:', formValues);
      console.log('Usuario ingresado:', user);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El nombre de usuario o la contraseña son incorrectos'
      });
      console.log('Nombre de usuario o contraseña incorrectos');
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Alguno de los campos no cumple con el requisito de 5 caracteres'
    });
    console.log('Alguno de los campos no cumple con el requisito de 5 caracteres');
  }
  };
  return (
   <div className='LogIn'>
    <div className="container">
      <h1 className='h1'> Inicio de sesion </h1>
      <div className="rectangle2">
          <form className='form' onSubmit={handleSubmit}>
          <input
            type="text"
            name="input1"
            placeholder="Nombre"
            value={formValues.input1}
            onChange={handleChange}
          />
          <br />
          <input
          type="contraseña"
          name="input2"
          placeholder="Contraseña"
          value={formValues.input2}
          onChange={handleChange}
          required
          />
           <div className='botones'>
            <button className='boton' type="button" onClick={handleCancel}>Cancelar</button>
            <BotonContinuar onClick={handleSubmit} />
          </div>
          <br/>
          <BotonRedireccion click={handleRedirectToRegister}>REGISTRATE</BotonRedireccion>
        </form>
      </div>
    </div>
  </div>
  );
};

export default LogIn;
