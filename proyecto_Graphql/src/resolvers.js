const tasks = require('./Movies');//Importamos el arreglo de tareas
//const {tasks} = require('./sample')

const User = require('./models/User');//Importamos el users que esta dentro 
//de la carpeta models para que me permita consultar la base de datos

const { createSourceEventStream } = require('graphql');

module.export = resolver ={//Exportamos resolvers que es un objeto

//Definimos que es lo que va a hacer cuando llegue a esa consulta
//definismos lo que se puede consultar
  Query:{
      hello: () =>{//Le indico que cuando consulten hello que lo defini en squema quiero que me retorne el siguiente mensaje
          return 'HOLA jajaja'//Esto hara cuando haga esa consulta
      },
      saludo (){//Creamos la funcion saludo va a tomar un imput que lo recibimos con args
          return 'HOLA';
      },
      tasks(){
          return tasks; //Retormanos el arreglo de tareas
      },
      async Users(){//Creamos la funcion
       return await User.find();
       
      }
  },


  //Creamos las mutaciones
  Mutation: {
    createTask(_,{ input }){ //Recibimos lo que el usario nos pasara a traves de la consulta
      input._id = tasks.length;//Obteniendo la longitud de la matriz
      tasks.push(input);//Guardamos los datos al final del arreglo
      return input;
    },

    //Crear los nuevos ususarios
     async createUser(_, { input }) {//Entrada para poder guardar los datos datos
      const newUser = new User(input);//Creamos un nuevo usuario a partir de la entrada
      await newUser.save();//Para guardar los datos
      return newUser; 
    },

    //Eliminar usuario
    async deleteUser(_, {_id}){
      return await User.findByIdAndDelete(_id);//Retornamos el usuario que estamos eliminando
    },

    //Actualizar Usuario
    async updateUser(_, {_id, input}){
      //Hacemos la consulta a mongoDB
      return await User.findByIdAndUpdate(_id, input, {new: true});//Retornamos el usuario que estamos modificando
    }

  }

};//para consultar

