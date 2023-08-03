import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSSYLES/inventario.css';
import NavBar from './navBar';
import Fother from './foother';
import Swal from 'sweetalert2';

const Inventario = () => {
  const [formValues, setFormValues] = useState({
    nombreProducto: '',
    codigo: '',
    tipoProducto: '',
    tienda: '',
    precio: '',
    cantidad: '',
  });

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null); // Estado para almacenar el archivo de imagen seleccionado
  const [alerta, setAlerta] = useState({ tipo: '', mensaje: '' }); // Estado para manejar las alertas

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImagenSeleccionada(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombreProducto, codigo, tipoProducto, tienda, precio, cantidad } = formValues;
   
    if (nombreProducto.trim() === '' || codigo.trim() === '' || tipoProducto.trim() === '' || tienda.trim() === '' || precio.trim() === '' || cantidad.trim() === '') {
      setAlerta({ tipo: 'error', mensaje: 'Todos los campos son obligatorios' });
      return;
    }

    axios
      .post('http://localhost:3000/api/producto', {
        id_producto: codigo,
        producto: nombreProducto,
        cantidad_producto: cantidad,
        fecha_prodcuto: new Date().toISOString(),
        precio_producto: precio,
        imagen_producto: '', 
      })
      .then((response) => {
        setAlerta({ tipo: 'success', mensaje: 'Producto registrado exitosamente' });
       
        setFormValues({
          nombreProducto: '',
          codigo: '',
          tipoProducto: '',
          tienda: '',
          precio: '',
          cantidad: '',
        });
      })
      .catch((error) => {
        console.error('Error al registrar el producto:', error);
        setAlerta({ tipo: 'error', mensaje: 'Error al registrar el producto' });
      });
  };

  useEffect(() => {
    if (alerta.mensaje) {
      const { tipo, mensaje } = alerta;
      Swal.fire({
        icon: tipo,
        title: tipo === 'success' ? 'Éxito' : 'Error',
        text: mensaje,
        cancelButtonText: 'Cerrar',
      });
    }
  }, [alerta]);

  return (
    <div className='invetario_body'>
      <NavBar />
      <div className='Perfil_fondo'></div>
      <div className='Contenedor_perfil'>
        <div className='Imagen_perfil' />
        <div className='informacion_usuario'>
          <div className='Informacion_perfil'>Iram emanuel gordillo</div>
          <div className='Ubicacion_perfil'>Tuxtla Gutierrez. Chiapas</div>
        </div>
        <button className='Edit_perfil'>Editar perfil</button>
      </div>
      <div className='contenedor_form_agregar'>
        <form className='form_producto' onSubmit={handleSubmit}>
          <input
            type='text'
            name='nombreProducto'
            placeholder='Nombre del producto'
            value={formValues.nombreProducto}
            onChange={handleChange}
          />
          <input
            type='text'
            name='codigo'
            placeholder='Código'
            value={formValues.codigo}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='tipoProducto'
            placeholder='Tipo de producto'
            value={formValues.tipoProducto}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='tienda'
            placeholder='Tienda para su inventario'
            value={formValues.tienda}
            onChange={handleChange}
          />
          <input
            type='text'
            name='precio'
            placeholder='Precio'
            value={formValues.precio}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='cantidad'
            placeholder='Cantidad'
            value={formValues.cantidad}
            onChange={handleChange}
            required
          />
        </form>
      </div>
      <div className='contenedor_imagen'>
        <div className='imagen_agregar'>
          {imagenSeleccionada ? (<img className='imagen_agregar' src={URL.createObjectURL(imagenSeleccionada)} alt='Imagen seleccionada'/>):<h1>Selecciona una imagen</h1>}
        </div>
     
        <input type='file' accept='.jpg,.jpeg,.png,.svg' onChange={handleFileChange} className='' />
      
        <button type='submit' className='boton_imagen' onClick={handleSubmit}>
          Agregar producto
        </button>
      </div>
      <Fother />
    </div>
  );
};

export default Inventario;
