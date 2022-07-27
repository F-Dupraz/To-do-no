//Importamos express
const express = require('express');
//Importamos el servicio de usuarios
const { getUsers, postUser, getUserByEmail, updateUser, deleteUser } = require('../services/users.services');

//Creamos el enrutador con express
const router = express.Router();

//Hacemos una peticion para traer un usuario por email
router.get('/', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el email del cuerpo de la peticion
    const body = req.body;
    //Buscamos un usuario con el getUserByEmail 
    const user = await getUserByEmail(body.email, body.password);
    //Retornamos el usuario encontrado
    return res.json(user);
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
    //Parceamos la respuesta a un JSON
    const newUserParsed = res.json(insertUser);
    //Borramos la contraseña del retorno
    delete newUserParsed.password;
    //Retornamos el usuario parseado a JSON
    return newUserParsed;
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
    //Parceamos la respuesta a un JSON
    const updatedUser = res.json(user);
    //Borramos la contraseña de la respuesta
    delete updatedUser.password;
    //Retornamos el usuario ya actualizado
    return updatedUser;
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.log(err);
  }
});

//Hacemos una peticion para eliminar un usuario
router.delete('/', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la paticion
    const body = req.body;
    //Eliminamos el usuario
    const user = await deleteUser(body.email);
    //Parceamos la respuesta a un JSON
    const deletedUser = res.json(user);
    //Borramos la contraseña de la respuesta
    delete deletedUser.password;
    //Retornamos el usuario ya eliminado
    return deletedUser;
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.log(err);
  }
});

//Exportamos el router
module.exports = router;
