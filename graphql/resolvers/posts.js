//Import Post module
const Post = require("../../models/Post");

//corressponding resolver for retrieving post queries
module.exports = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
