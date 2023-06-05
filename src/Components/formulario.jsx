import React from 'react';
import BotonContinuar from './BotonContinuar';
import BotonRedireccion from './BotonRedireccion';
import Swal from 'sweetalert2';
import '../CSSYLES/formulario.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Formulario = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: ''
  });

  const handleCancel = () => {
    setFormValues({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: ''
    });
  };
  
  const handleRedirectToLogin = () => {
    navigate('/login');
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
    const isValid = values.every((value) => value.length >= 1);

    if (isValid) {
      const usuario = {
        nombre: formValues.input1,
        telefono: formValues.input2,
        apellido: formValues.input3,
        pais: formValues.input4,
        ciudad: formValues.input5,
        correo: formValues.input6
      };
          let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Obtener el array de usuarios de localStorage o crear uno nuevo si no existe
           usuarios.push(usuario); // Agregar el nuevo usuario al array
            localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Almacenar el array de usuarios en localStorage
              Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Formulario enviado exitosamente'
      });
       console.log("los datos se enviaron correctamente");
       
    }
     else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Alguno de los campos no cumple con el requisito de 5 caracteres'
      });
      console.log('Alguno de los campos no cumple con el requisito de 5 caracteres');
    }
  };
  return (
    <div className='Formulario'>
    <div className="container">
      <h1 className='h1'> REGISTRO </h1>
      <div className="rectangle">
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
          type="tel"
          name="input2"
          placeholder="Numero telefónico"
          value={formValues.input2}
          onChange={handleChange}
          pattern="[0-9]*"
          required
          />
          <br />
          <input
            type="text"
            name="input3"
            placeholder="Apellido"
            value={formValues.input3}
            onChange={handleChange}
          />
          <br />
          <div className='union'>
          <input
            type="text"
            name="input4"
            placeholder="pais"
            value={formValues.input4}
            onChange={handleChange}
          />
           <input
            type="text"
            name="input5"
            placeholder="ciudad"
            value={formValues.input5}
            onChange={handleChange}
          />
          </div>
          
          <br />
          <input
            type="email"
            name="input6"
            placeholder="Correo electrónico"
            value={formValues.input6}
            onChange={handleChange}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
          />
          <div className='botones'>
            <button className='boton' type="button" onClick={handleCancel}>Cancelar</button>
            <BotonContinuar onClick={handleSubmit} />
          </div>
          <br/>
          <BotonRedireccion click={handleRedirectToLogin}>Iniciar sesion</BotonRedireccion>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Formulario;
