const router = require("express").Router();
const Posts = require("../models/Posts");
const User = require("../models/User");

// route to get all posts
router.get("/", async (req, res) => {
  try {
    // const postsData = await Posts.findAll({
    //   where: { user_id: 3 },
    // });
    // const postsData = await Posts.findAll({
    //   include: [{ model: User, required: true, as: "username" }],
    // });
    //const postsData = await User.findAll({ include: Posts });
    // const postsData = await Posts.findAll({
    //   attributes: {
    //     include: [
    //       sequelize.literal(
    //         "(select user.id from user where posts.user_id = user.id)"
    //       ),
    //       "userID",
    //     ],
    //   },
    // });
    const postsData = await Posts.findAll();
    console.log(postsData);
    const posts = postsData.map((post) => post.get({ plain: true }));
    console.log(posts);
    //res.json(postsData);
    res.render("all", { posts });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
