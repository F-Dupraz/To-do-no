//Creamos un Pool de conexion de postgres
const { Pool } = require('pg');

//Creamos todas las variables con las variables de entorno
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;

//Configuramos el pool con sus respectivas variables de conexion
const pool = new Pool({
  connectionString: `postgres://${user}:${password}@${host}:${port}/${db_name}`
});

//Exportamos el pool
module.exports = pool;