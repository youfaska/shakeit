const express = require("express");
const app = express();
const morgan = require("morgan");


//middler morgan
app.use(morgan("dev")); //more edetails in log console
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//configurar el puerto
app.set('port',3000);
app.set('json spaces',2);

//routers
app.use(require('./routers/index.js'));
app.use(require('./routers/debates.js'));


//arrancado el servidor
app.listen(app.get('port'), () => {
    console.log("El servidor está inicializado en el puerto 3000");
});