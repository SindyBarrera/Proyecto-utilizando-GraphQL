const mongoose = require('mongoose');//iMPORTAMOS LA CONEXION DE MONGODB 
//import {mongoose} from "mongoose";

module.exports.conexxion =  async function connect()//Para poder manejar la conexion asincrona
{
    try{
    //Para que se conecte a la base de datos y le damos la direccion de la base de datos
    //await para que una ves termine de conectarme recien muestre el mensaje por consola
    await mongoose.connect('mongodb://localhost/mongodbgraphql',{
    
    useNewUrlParset: true//Propiedad que nos ayudara a evitar un error por consola 

    })
    console.log('CONEXION EXITOSA');
    }catch(e)
   {
    console.log('ERROR AL CONECTARSE= '+e);
   }
}

//module.exports = connect();