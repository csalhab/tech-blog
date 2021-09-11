const User = require("./User");
const Post = require("./Post");

// User.hasMany(Post, {
//   foreignKey: "user_id",
// });

// Post.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// The association can also be created from the Car side
Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
