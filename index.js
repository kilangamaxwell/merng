//------------------Dependency Imports--------------

const { ApolloServer } = require("apollo-server");

//Import typde definition
const typeDefs = require("./graphql/typeDefs");

//import users and posts resolvers
const resolvers = require("./graphql/resolvers/index");

//Add MongoDB server
const mongoose = require("mongoose");

//----------------Relative Imports----------------

//Add mongoDB connection string
const { MONGODB } = require("./config.js");

//Setup apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Connect to mongoose server
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  //Specify port for listening to server
  console.log("MongoDB Connected");
  return server.listen({ port: 5000 }).then((res) => {
    console.log(`Server running at ${res.url}`);
  });
});
