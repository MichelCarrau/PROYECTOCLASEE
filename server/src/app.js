const express = require('express');
const cors    = require('cors');
const config  = require('./config');
const clientes= require('./molulos/clientes/rutas');
const usuario = require('./molulos/users/rutas');
const lucesR  = require('./molulos/luces/rutas');
const puertasR= require('./molulos/puertas/rutas');

const app = express();
app.use(express.json());
app.use(cors());
app.set('port', config.app.port || 4000);

app.use('/api/clientes', clientes);
app.use('/api/usuarios', usuario);
app.use('/api/luces',   lucesR);
app.use('/api/puertas',  puertasR);

app.listen(app.get('port'), () => console.log('Servidor en', app.get('port')));
