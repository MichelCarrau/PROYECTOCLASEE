const bd = require ('../../BD/mysqlv2')

const TABLA = 'usuarios'

function todos (){
    return bd.todos(TABLA)
}

function uno (id){
    return bd.uno(TABLA, id)
}

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10; //  10 como nivel de complejidad


async function agregar (body){
    // SIN bcrypt
    const nuevoUsuario = {
        id: body.id,
        nombre: body.nombre,
        pw: body.pw,  // guardar tal cual
        email: body.email,
        status: body.status
    }
    return bd.agregar('usuarios', nuevoUsuario)
}


function eliminar (body){
    return bd.eliminar(TABLA,body)
}
function login (body){
    return bd.login(TABLA,body)
}
module.exports={
    todos,uno,agregar,eliminar,login
}