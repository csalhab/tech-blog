const sequelize = require("../config/connection");
const { Post } = require("../models");

const seedUser = require("./userData");
const postsSeedData = require("./postsData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await seedUser();

  for (const post of postsSeedData) {
    const newPost = await Post.create({
      ...post,
      //attach user_id foreign key's value based on a random users.id to each post
      user_id: users[Math.floor(Math.random() * users.length - 1)].id,
    });
  }
  //await seedPosts();

  process.exit(0);
};

seedAll();
