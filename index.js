const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();


//Crear el servidor de express

const app = express();

// Base de datos
dbConnection();

//CORS
app.use( cors() );

//Directorio Publico
app.use( express.static('public') );

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use( '/api/auth' , require('./routes/auth') ); //Todo lo que exporte el archivo va a esa ruta
//TODO: CRUD: crear eventos

app.use( '/api/events' , require('./routes/events') ); //Todo lo que exporte el archivo va a esa ruta

//Escuchar peticiones

app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});