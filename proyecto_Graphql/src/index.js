const express = require('express')//Express Framework que me permite crear 
//el servidor

//Funcion que me ayuda a que cuando entre a una ruta va a ser procesada utilizando la herramienta de graphql
const {graphqlHTTP} = require('express-graphql'); 
const esquema_2 = require("./esquema_2");//Importamos todo el modulo del esquema
const conect = require('./DataBase');//Importamos la funcion conect

conect.conexxion();//Nos conectamos con MongoDB

const app = express();

//Maneja con las funciones req, res
app.get('/', (req, res) =>{//creatmos una ruta 

    res.json({//Que me devuelva un json con este mensaje
        message: "HOLA JS"
    })

});

//Creamos la ruta 
app.use('/graphql', graphqlHTTP({//configurando /graphql para crear una funcion 
    //que permita integrar graphql en express
    
    graphiql: true, //Para que nos muestre una herramienta para hacer consultas
    schema: esquema_2, //Es el que permite definir que puedo consultar 

    
})); 

//iniciando servidor en el puerto 3000
app.listen(3000, () => console.log('SERVIDOR CORRIENDO EN EL PUERTO 3000  http://localhost:3000/graphql'));
//rinraf me permite eliminar carpetas de mi proyecto