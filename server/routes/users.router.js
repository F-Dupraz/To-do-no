//Importamos express
const express = require('express');
//Importamos el servicio de usuarios
const { getUsers, postUser, getUserByEmail, updateUser, deleteUser } = require('../services/users.services');

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

//Hacemos una peticion para traer un usuario por email
router.get('/', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el email del cuerpo de la peticion
    const body = req.body;
    //Buscamos un usuario con el getUserByEmail 
    const user = await getUserByEmail(body.email);
    //Retornamos el usuario encontrado
    return user;
  }
  //Si hay un error 
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

//Hacemos una peticion para actualizar un usuario
router.patch('/', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la paticion
    const body = req.body;
    //Actualizamos el usuario
    const user = await updateUser(body.name, body.surname, body.email);
    //Retornamos el usuario ya actualizado
    return user;
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.log(err);
  }
});

//Hacemos una peticion para eliminar un usuario
router.patch('/', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la paticion
    const body = req.body;
    //Eliminamos el usuario
    const user = await deleteUser(body.email);
    //Retornamos el usuario ya eliminado
    return user;
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.log(err);
  }
});

//Exportamos el router
module.exports = router;