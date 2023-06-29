const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nuevo_usuario',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Configuración del body parser para analizar las solicitudes JSON
app.use(bodyParser.json());

// Configuración de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Ruta para recibir los datos del formulario y guardarlos en la base de datos
app.post('/api/data', (req, res) => {
  const { Nombre, Contraseña, Numerotelefonico, Apellido, Pais, Ciudad, Correo} = req.body;

  const query = `INSERT INTO registro_usuario (Nombre, Contraseña, Numerotelefonico, Apellido, Pais, Ciudad, Correo) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [Nombre, Contraseña, Numerotelefonico, Apellido, Pais, Ciudad, Correo];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al insertar los datos en la base de datos: ', err);
      res.status(500).json({ error: 'Error al guardar los datos' });
    } else {
      res.json({ success: true });
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});