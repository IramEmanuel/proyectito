import React from 'react';
import BotonContinuar from './BotonContinuar';
import BotonRedireccion from './BotonRedireccion';
import Swal from 'sweetalert2';
import '../CSSYLES/formulario.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
  });

  const handleCancel = () => {
    setFormValues({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
    });
  };

  const handleRedirectToLogin = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { input1, input2, input3, input4, input5, input6, input7 } = formValues;

    // Validar y limpiar los datos ingresados
    // ...

    // Realizar la solicitud de envío del formulario
    axios
      .post('http://localhost:3000/api/data', {
        Nombre: input1,
        Contraseña: input2,
        Numerotelefonico: input3,
        Apellido: input4,
        Pais: input5,
        Ciudad: input6,
        Correo: input7,
      })
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Te has registrado exitosamente',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error',
        });
      });
  };

  return (
    <div className='Formulario'>
      <div className='container1'>
        <h1 className='h1'>REGISTRO</h1>
        <div className='rectangle'>
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              name='input1'
              placeholder='Nombre'
              value={formValues.input1}
              onChange={handleChange}
            />
            <br />
            <input
              type='text'
              name='input2'
              placeholder='Contraseña'
              value={formValues.input2}
              onChange={handleChange}
            />
            <br />
            <input
              type='tel'
              name='input3'
              placeholder='Número telefónico'
              value={formValues.input3}
              onChange={handleChange}
              pattern='[0-9]*'
              required
            />
            <br />
            <input
              type='text'
              name='input4'
              placeholder='Apellido'
              value={formValues.input4}
              onChange={handleChange}
            />
            <br />
            <div className='union'>
              <input
                type='text'
                name='input5'
                placeholder='País'
                value={formValues.input5}
                onChange={handleChange}
              />
              <input
                type='text'
                name='input6'
                placeholder='Ciudad'
                value={formValues.input6}
                onChange={handleChange}
              />
            </div>
            <br />
            <input
              type='email'
              name='input7'
              placeholder='Correo electrónico'
              value={formValues.input7}
              onChange={handleChange}
              required
            />
            <div className='botones'>
              <button className='boton' type='button' onClick={handleCancel}>
                Cancelar
              </button>
              <BotonContinuar onClick={handleSubmit} />
            </div>
            <br />
            <BotonRedireccion click={handleRedirectToLogin}>Iniciar sesión</BotonRedireccion>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
