//Importamos express
const express = require('express');
//Importamos el servicio de notas
const { getNotes, createNote, deleteNote } = require('../services/notes.services');

//Creamos el enrutador con express
const router = express.Router();

//Hacemos una peticion para traer todas las notas de un usuario
router.get('/:id/notes', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la peticion
    const body = req.body;
    //Buscamos las notas del usuario
    const usersNotes = await getNotes(body.id_users);
    //Retornamos las notas
    return res.json(usersNotes);
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

//Hacemos una peticion de post para agregar una nueva nota
router.post('/:id/notes', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la peticion
    const body = req.body;
    //Insertamos una nueva nota con el createNote
    const newNote = await createNote(body.content, body.id_users);
    //Retornamos la nota
    return res.json(newNote);
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

router.delete('/:id/notes', async (req, res, next) => {
  //Si todo sale bien
  try {
    //Requerimos el cuerpo de la peticion
    const body = req.body;
    //Eliminamos una nota con el deleteNote
    const deletedNote = await deleteNote(body.id);
    //Retornamos la nota
    return res.json(deletedNote);
  }
  //Si hay error
  catch (err) {
    //Mostramos el error en consola
    console.error(err);
  }
});

//Exportamos el router
module.exports = router;
