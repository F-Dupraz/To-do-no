//Importamos express
const express = require('express');

//Importamos el enrutador de los usuarios
const usersRouter = require('./users.router');

//Creamos los paths para cada enrutador
function routerAPI(app) {
  //Creamos el enrutador con express
  const router = express.Router();

  //Usamos la aplicacion y utilizamos el enrutador de express
  app.use('/api/v1', router);

  //Usamos el enrutador de express con el de los usuarios
  router.use('/users', usersRouter);
}

//Importamos la API del enrutador
module.exports = routerAPI;