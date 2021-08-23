const { Posts } = require("../models");

const postsdata = [
  {
    title: "__dunder__",
    content: "say dunerrrrr",
  },
  {
    title: "express",
    content: "server baby",
  },
  {
    title: "handlebars",
    content: "mustachies",
  },
  {
    title: "sequelize",
    content: "all about the db and data",
  },
];

const seedPosts = () => User.bulkCreate(postsdata);

module.exports = seedPosts;
