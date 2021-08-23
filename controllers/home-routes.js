const router = require("express").Router();
const Posts = require("../models/Posts");

// route to get all posts
router.get("/", async (req, res) => {
  const postsData = await Posts.findAll().catch((err) => {
    res.json(err);
  });
  //const posts = postsData.map((post) => post.get({ plain: true }));
  //res.render("all", { posts });
  res.send("it worked");
});

module.exports = router;
