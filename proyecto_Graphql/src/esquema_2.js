const { makeExecutableSchema } = require('graphql-tools'); //Creamos un esquema nuevo que une a resolvers y typeDefs
const resolvers = require('./resolvers');//Indicamos que importe el archivo resolvers

//Definimos que podemos consultar desde la apis desde graphql 
const typeDefs = ` 
type Query {
   hello: String 
   saludo: String
   tasks: [Task] 
   Users: [User]
}


type Task{
    _id: ID
    title: String!
    categoria: String!
    director: String!
    duracion: String

}

type User{
    _id: ID 
    title: String!   
    categoria: String!
    director: String!
    duracion: String
}

type Mutation{
    createTask(input: TaskInput): Task 
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
    updateUser(_id: ID, input: UserInput): User
}

input TaskInput{
    title: String!
    categoria: String!
    director: String!
    duracion: String
}

input UserInput {
    title: String!
    categoria: String!
    director: String!
    duracion: String
}

`;

//Creamos el esquema 
const schema = makeExecutableSchema({
    //Pasamos los dos objetos
    typeDefs: typeDefs,
    resolvers: resolver,
});

module.exports = schema;