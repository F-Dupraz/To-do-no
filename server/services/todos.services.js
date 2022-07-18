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
    WHERE id_users = ${id};
  `);
  //Retornamos los todos parseados a un JSON
  return res.json(todos);
}

/**
 * Exporta todas las funciones
 * @exports
 */
module.exports = {
  getTodos
}
