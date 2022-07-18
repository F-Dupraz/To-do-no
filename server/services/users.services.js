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
  return res.json(users);
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
  return res.json(getUser);
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
  //Parceamos la respuesta a un JSON
  const newUser = res.json(insertUser);
  //Borramos la contraseña del retorno
  delete newUser.password;
  //Retornamos el nuevo usuario
  return newUser;
}

/**
 * Exporta todas las funciones 
 * @exports
 */
module.exports = {
  getUsers,
  getUserByEmail,
  postUser
}