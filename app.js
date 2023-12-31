// importacion de las dependecias y la base de datos para la conexion
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const { DBConexion } = require('./database');

DBConexion();

const app = express();

dotenv.config();

//Puerto
const port = process.env.PORT || 4000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// direccionamiento a las rutas
app.use(require('./scr/routes/usuario.route'));
app.use(require('./scr/routes/post.route'));
app.use(require('./scr/routes/comentario.route'));

//Servidor en escucha
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))