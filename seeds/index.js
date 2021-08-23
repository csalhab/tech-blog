const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedPosts = require("./postsData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPosts();

  process.exit(0);
};

seedAll();
