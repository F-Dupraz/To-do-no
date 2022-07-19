//Impotramos el pool de la DB
const pool = require('../db');
//Importamos bcrypt
const bcrypt = require('bcrypt');

/**
 * Funcion para traer todos los usuarios
 * @returns Todos los usuarios en formato JSON
 */
async function getUsers() {
  //Hacemos una query SELECT a la tabla users
  const users = await pool.query(`
    SELECT *
    FROM users;
  `);
  //Retornamos la respuesta parseada en JSON
  return users;
}

/**
 * Funcion para traer un usuario por email
 * @param {String} email 
 * @returns Un usuario en formato JSON
 */
async function getUserByEmail(email) {
  //Hacemos una query de SELECT y le pasamos como parametro el email
  const getUser = await pool.query(`
    SELECT *
    FROM users
    WHERE email = '${email}';
  `);
  //Retornamos el usuario parseado a JSON
  return getUser;
}

/**
 * Funcion para insertar un nuevo usuario
 * @param {String} name 
 * @param {String} surname 
 * @param {String} email 
 * @param {BigInt} phone_number 
 * @param {String} password 
 * @returns Nuevo usuario en formato JSON
 */
async function postUser(name, surname, email, phone_number, password) {
  //Ciframos la contraseña con bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);
  //Hacemos un query de INSERT a la tabla users con todos los datos
  const insertUser = await pool.query(`
    INSERT INTO users (name, surname, email, phone_number, password)
    VALUES (${name}, ${surname}, ${email}, ${phone_number}, ${hashedPassword})
    RETURNING *;
  `);
  //Retornamos el nuevo usuario
  return newUser;
}

/**
 * Funcion para actualizar un usuario
 * @param {String} name 
 * @param {String} surname 
 * @param {String} email 
 * @returns Usuario actualizado parseado a JSON
 */
async function updateUser(name, surname, email) {
  //Hacemos un query de UPDATE y filtramos por email
  const user = await pool.query(`
    UPDATE users SET name='${name}', surname='${surname}'
    WHERE email='${email}'
    RETURNING *;
  `);
  //Retornamos el usuario actualizado
  return user;
}

/**
 * Funcion para eliminar un usuario
 * @param {String} email 
 * @returns Usuario eliminado parseado a JSON
 */
 async function deleteUser(email) {
  //Hacemos un query de DELETE y filtramos por email
  const user = await pool.query(`
    DELETE
    FROM users
    WHERE email='${email}'
    RETURNING *;
  `);
  //Retornamos el usuario eliminado
  return user;
}

/**
 * Exporta todas las funciones 
 * @exports
 */
module.exports = {
  getUsers,
  getUserByEmail,
  postUser,
  updateUser,
  deleteUser
}
