const bd = require('../../BD/mysqlv2');

async function listar() {
  return bd.todos('luces');
}

async function agregarLuz(data) {
  // data = { nombre, ubicacion, estado }
  return bd.insertar('luces', data);
}

async function cambiarEstado(id, estado) {
  return bd.actualizar('luces', { id, estado });
}

module.exports = { listar, agregarLuz, cambiarEstado };


//http://localhost:4000/api/puertas/1/estado encendido y 0 apagado
