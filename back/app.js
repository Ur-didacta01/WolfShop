const express=require("express");
const app = express();
const errorMiddleWare= require("./middleware/errors")
const cookieParser=require("cookie-parser")
const bodyParser=require('body-parser')
const fileUpload = require('express-fileupload')

//Uso de constantes importadas
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cookieParser());

//Importar rutas
const productos=require("./routes/products")
const usuarios=require("./routes/auth")
const ordenes=require("./routes/orders")

app.use('/api',productos) //Sujeto a decision (ruta del navegador)
app.use('/api',usuarios)
app.use('/api', ordenes)

//MiddleWares para manejar errores
app.use(errorMiddleWare)

module.exports=app