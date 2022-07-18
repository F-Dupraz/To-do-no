//Importamos express
const express = require('express');
//Importamos el servicio de todos
const { getTodos } = require('../services/todos.services');

//Creamos el enrutador con express
const router = express.Router();

//Hacemos una peticion para traer todos los todos de un usuario
router.get('/:id/todos', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el body
    const body = req.body;
    //Buscamos las todos del usuario
    const usersTodos = await getTodos(body.id);
    //Retornamos las todos
    return usersTodos;
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

//Exportamos el router
module.exports = router;
