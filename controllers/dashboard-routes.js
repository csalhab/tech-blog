const router = require("express").Router();
const Posts = require("../models/Posts");
const User = require("../models/User");

// route to get all posts on dashboard
// /dashboard
router.get("/", async (req, res) => {
  try {
    const postsData = await Posts.findAll({
      where: {
        user_id: User.id,
      },
      include: {
        model: User,
      },
    });
    console.log(postsData);
    const posts = postsData.map((post) => post.get({ plain: true }));
    console.log(posts);
    //res.json(postsData);
    res.render("dashboard", { posts, logged_in: true });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
