const router = require("express").Router();
const Posts = require("../models/Posts");

// route to get all posts
router.get("/", async (req, res) => {
  try {
    const postsData = await Posts.findAll();
    //res.status(200).json(postsData);
    res.send("hellow there .. it worked");
    //const posts = postsData.map((post) => post.get({ plain: true }));
    //res.render("all", { posts });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
