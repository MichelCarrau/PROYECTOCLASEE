const express = require('express');
const router  = express.Router();
const ctrl    = require('./controlador');

// 1) Listar luces
router.get('/', async (req, res) => {
  try {
    const rows = await ctrl.listar();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener luces' });
  }
});

// 2) Crear nueva luz
router.post('/', async (req, res) => {
  try {
    const data   = req.body; // { nombre, ubicacion, estado }
    const result = await ctrl.agregarLuz(data);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al insertar luz' });
  }
});

// 3) Cambiar estado de luz
router.post('/:id/estado', async (req, res) => {
  try {
    const { id }     = req.params;
    const { estado } = req.body;
    const result     = await ctrl.cambiarEstado(id, estado);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al cambiar estado' });
  }
});

module.exports = router;
