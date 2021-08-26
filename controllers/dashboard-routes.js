const router = require("express").Router();
const Posts = require("../models/Posts");
const User = require("../models/User");
const withAuth = require("../utils/auth");

// route to get all posts on dashboard
// /dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const postsData = await Posts.findAll({
      where: {
        user_id: req.session.sid,
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
