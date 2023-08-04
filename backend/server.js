const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Directory where the uploaded images will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  },
});

const upload = multer({ storage: storage });
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/api/data', (req, res) => {
  const { Nombre, Contraseña, Numerotelefonico, Apellido, Pais, Ciudad, Correo } = req.body;

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

app.post('/api/login', (req, res) => {
  const { Nombre, Contraseña } = req.body;

  const query = `SELECT * FROM registro_usuario WHERE Nombre = ? AND Contraseña = ?`;
  const values = [Nombre, Contraseña];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta en la base de datos: ', err);
      res.status(500).json({ error: 'Error al iniciar sesión' });
    } else {
      if (results.length > 0) {
        res.json({ success: true });
      } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    }
  });
});

app.post('/api/producto', upload.single('imagen_producto'), (req, res) => {
  const { id_producto, producto, cantidad_producto, fecha_prodcuto, precio_producto } = req.body;
  const imagen_producto = req.file ? req.file.filename : null;

  const query = `INSERT INTO registro_items (id_producto, producto, cantidad_producto, fecha_prodcuto, precio_producto, imagen_producto) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [id_producto, producto, cantidad_producto, fecha_prodcuto, precio_producto, imagen_producto];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta en la base de datos: ', err);
      res.status(500).json({ error: 'Error al registrar el producto' });
    } else {
      res.json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});