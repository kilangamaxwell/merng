//import resolvers for users and posts
const postsResolver = require("./posts");
const usersResolver = require("./users");

//combine and export both resolvers
module.exports = {
  Query: {
    ...postsResolver.Query,
  },
};
