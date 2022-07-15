//Impotramos el pool de la DB
const pool = require('../db');
//Importamos bcrypt
const bcrypt = require('bcrypt');

//Obtener todos los usuarios
async function getUsers() {
  //Hacemos una query SELECT a la tabla users
  const users = await pool.query(`
    SELECT *
    FROM users;
  `);
  //Retornamos la respuesta parseada en JSON
  return res.json(users);
}

//Insertar un nuevo usuario
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

//Exportamos las funciones
module.exports = {
  getUsers,
  postUser
}