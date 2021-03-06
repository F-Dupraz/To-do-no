//Importamos express
const express = require('express');
//Importamos el servicio de todos
const { getTodos, createTodo, deleteTodo } = require('../services/todos.services');

//Creamos el enrutador con express
const router = express.Router();

//Hacemos una peticion para traer todos los todos de un usuario
router.get('/:id/todos', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la peticion
    const body = req.body;
    //Buscamos las todos del usuario
    const usersTodos = await getTodos(body.id_users);
    //Retornamos las todos
    return res.json(usersTodos);
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

//Hacemos una peticion de post para agregar una nueva todo
router.post('/:id/todos', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la peticion
    const body = req.body;
    //Insertamos una nueva todo con el createTodo
    const newTodo = await createTodo(body.description, body.id_users);
    //Retornamos la todo
    return res.json(newTodo);
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

router.delete('/:id/todos', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la peticion
    const body = req.body;
    //Eliminamos una todo con el deleteTodo
    const deletedTodo = await deleteTodo(body.id);
    //Retornamos la todo
    return res.json(deletedTodo);
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

//Exportamos el router
module.exports = router;
