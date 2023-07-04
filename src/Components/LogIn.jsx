import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../CSSYLES/formulario.css';
import BotonContinuar from './BotonContinuar';
import BotonRedireccion from './BotonRedireccion';

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
    navigate('/Registro');
  };

  const RedirectToMenu = () => {
    navigate('/menu');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateLogin = () => {
    const { input1, input2 } = formValues;

    axios
      .post('http://localhost:3000/api/login', { Nombre: input1, Contraseña: input2 })
      .then((response) => {
        const { success } = response.data;

        if (success) {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Inicio de sesión exitoso, ¡BIENVENIDO!',
            confirmButtonText: 'Sí',
          }).then((result) => {
            if (result.isConfirmed) {
              RedirectToMenu();
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre de usuario o la contraseña son incorrectos',
            cancelButtonText: 'No',
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al iniciar sesión',
          cancelButtonText: 'No',
        });
        console.error('Error al iniciar sesión:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { input1, input2 } = formValues;
    const isValid = input1.trim() !== '' && input2.trim() !== '';

    if (isValid) {
      validateLogin();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Verifica que tus datos sean válidos',
      });
    }
  };

  return (
    <div className="LogIn">
      <div className="container1">
        <h1 className="h1">Inicio de sesión</h1>
        <div className="rectangle2">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="input1"
              placeholder="Nombre"
              value={formValues.input1}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="input2"
              placeholder="Contraseña"
              value={formValues.input2}
              onChange={handleChange}
              required
            />
            <div className="botones">
              <button className="boton" type="button" onClick={handleCancel}>
                Cancelar
              </button>
              <BotonContinuar onClick={handleSubmit} />
            </div>
            <br />
            <BotonRedireccion click={handleRedirectToRegister}>REGISTRATE</BotonRedireccion>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;