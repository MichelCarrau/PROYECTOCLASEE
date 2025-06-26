const express = require('express');
const router = express.Router();
const respuesta = require('../../red/respuestas');
const controlador = require('./controlador');

router.get('/', async (req, res) => {
  try {
    const items = await controlador.todos();
    respuesta.success(req, res, 200, items);
  } catch (error) {
    respuesta.error(req, res, 500, 'Error al obtener datos', error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await controlador.uno(req.params.id);
    respuesta.success(req, res, 200, item);
  } catch (error) {
    respuesta.error(req, res, 500, 'Error al obtener datos', error);
  }
});

router.post('/agregar', async (req, res) => {
  try {
    const resultado = await controlador.agregar(req.body);
    const mensaje = req.body.id == 0 ? 'Datos insertados' : 'Datos actualizados';
    respuesta.success(req, res, 200, mensaje);
  } catch (error) {
    respuesta.error(req, res, 500, 'Error al insertar o actualizar', error);
  }
});

router.post('/eliminar', async (req, res) => {
  try {
    await controlador.eliminar(req.body.id);
    respuesta.success(req, res, 200, 'Dato eliminado');
  } catch (error) {
    respuesta.error(req, res, 500, 'Error al eliminar', error);
  }
});

module.exports = router;
