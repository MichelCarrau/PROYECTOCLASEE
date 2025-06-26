const app = require('./app');

const config = require('./config');

app.listen(app.get('port'),()=>{
    console.log('Servidor escuchando en el puerto',app.get('port'))
});

const cors = require('cors');
app.use(cors());
