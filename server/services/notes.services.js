//importamos el pool
const pool = require('../db');

/**
 * Funcion para traer las notas de un usuario
 * @param {Integer} id 
 * @returns Las notas parseados a JSON
 */
async function getNotes(id) {
  //Hacemos un query SELECT para traerno las notas de un usuario
  const notes = await pool.query(`
    SELECT *
    FROM notes
    WHERE id_users = ${id}
    ORDER BY creation_date DESC;
  `);
  //Retornamos las notas parseados a un JSON
  return notes;
}

/**
 * Funcion para crear una nota
 * @param {Text} content 
 * @param {Integer} id_user 
 * @returns Una nueva nota ya perseada
 */
 async function createNote(content, id_user) {
  //Hacemos una query de INSERT para agregar una nueva nota
  const newNote = await pool.query(`
    INSERT INTO notes (content, creation_date, id_users)
    VALUES ('${content}', NOW(), ${id_user});
  `);
  //Retornamos la nueva nota parseada a JSON
  return newNote;
}

/**
 * Exporta todas las funciones
 * @exports
 */
 module.exports = {
  getNotes,
  createNote
}
