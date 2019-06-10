const express = require("express");
const app = express();
var cors = require("cors");
const morgan = require("morgan");
app.use(cors());
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });/*

/** app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/


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