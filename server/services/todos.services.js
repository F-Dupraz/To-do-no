//importamos el pool
const pool = require('../db');

/**
 * Funcion para traer los todos de un usuario
 * @param {Integer} id 
 * @returns Los todos parseados a JSON
 */
async function getTodos(id) {
  //Hacemos un query SELECT para traerno las todos de un usuario
  const todos = await pool.query(`
    SELECT *
    FROM todos
    WHERE id_users = ${id}
    ORDER BY creation_date DESC;
  `);
  //Retornamos los todos parseados a un JSON
  return todos;
}

/**
 * Funcion para crear una todo
 * @param {Text} description 
 * @param {Integer} id_user 
 * @returns Una nueva todo ya perseada
 */
async function createTodo(description, id_user) {
  //Hacemos una query de INSERT para agregar una nueva todo
  const newTodo = await pool.query(`
    INSERT INTO todos (description, creation_date, id_users)
    VALUES ('${description}', NOW(), ${id_user});
  `);
  //Retornamos la nueva todo parseada a JSON
  return newTodo;
}

/**
 * Funcion para eliminar una todo
 * @param {Integer} id 
 * @returns La todo eliminada
 */
async function deleteTodo(id) {
  //Hacemos una peticion DELETE para eliminar una todo
  const deletedTodo = await pool.query(`
    DELETE 
    FROM todos
    WHERE id=4;
  `);
  //Retornamos la todo eliminada
  return deletedTodo;
}

/**
 * Exporta todas las funciones
 * @exports
 */
module.exports = {
  getTodos,
  createTodo,
  deleteTodo
}
