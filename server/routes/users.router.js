//Importamos express
const express = require('express');
//Importamos el servicio de usuarios
const { getUsers, postUser } = require('../services/users.services');

//Creamos el enrutador con express
const router = express.Router();

//Hacemos una peticion para traer todos los usuarios
router.get('/', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Buscamos todos los usuarios por medio del servicio
    const users = await getUsers();
    //Retornamos los usuarios
    return users;
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

//Hacemos una peticion para agregar un usuario
router.post('/', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la peticion
    const body = req.body;
    //Agregamos el nuevo usuario por medio del servicio
    const newUser = await postUser(body.name, body.surname, body.email, body.phone_number, body.password);
    //Retornamos el nuevo usuario
    return newUser;
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

//Exportamos el router
module.exports = router;