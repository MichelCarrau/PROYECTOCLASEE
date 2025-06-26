const bd = require('../../BD/mysqlv2');

async function listar() {
  return bd.todos('puertas');
}

async function agregarPuerta(data) {
  // data = { nombre, ubicacion, estado }
  return bd.insertar('puertas', data);
}

async function cambiarEstado(id, estado) {
  return bd.actualizar('puertas', { id, estado });
}

module.exports = { listar, agregarPuerta, cambiarEstado };