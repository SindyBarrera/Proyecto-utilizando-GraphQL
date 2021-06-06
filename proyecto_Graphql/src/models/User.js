//Especificamos que guardaremos dentro de MongoDB
const {Schema,model} = require('mongoose');//Importamos mongoose

//Creamos nuevo esquema 
const userSchema = new Schema({
    title: String,
    categoria: String,
    director: String,
    duracion: String
});

//Para utilizarlos en otras partes de la aplicacion creamos un module
module.exports = model ('User', userSchema);