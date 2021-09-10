const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// route to get all posts on dashboard
// /dashboard
router.get("/", async (req, res) => {
  try {
    const postsData = await Post.findAll({
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
// GET /dashboard/newPost
router.get("/newPost", async (req, res) => {
  res.render("create-post", { logged_in: true });
});

module.exports = router;
