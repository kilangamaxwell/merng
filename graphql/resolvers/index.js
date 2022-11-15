//import resolvers for users and posts
const postsResolvers = require("./posts");
const usersResolvers = require("./users");

//combine and export both resolvers
module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
  },
};
