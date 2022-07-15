//Importamos express
const express = require('express');
//Importamos el cors
const cors = require('cors');
//Importamos la API de los enrutadores
const routerAPI = require('./routes/index.router');

//Creamos la aplicacion con express
const app = express();
//Configuramos el puerto
const port = process.env.BACKEND_PORT || 5000;

//Usamos la aplicacion con express parceado a JSON
app.use(express.json());
//Usamos la aplicacion con el cors
app.use(cors());

//Seteamos la API con la aplicacion
routerAPI(app);

//La aplicacion escucha por el puerto definido
app.listen(port, () => {
  //Si funciona nos avisa por consola
  console.log(`App listening on port ${port}`);
});