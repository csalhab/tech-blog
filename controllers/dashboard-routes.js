const router = require("express").Router();
const { Post, User } = require("../models");

// route to get all posts on dashboard
// /dashboard
router.get("/", async (req, res) => {
  console.log(req.session);
  try {
    const postsData = await Post.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: {
        model: User,
      },
    });
    console.log(postsData);
    const posts = postsData.map((post) => post.get({ plain: true }));
    console.log(posts);
    //res.json(postsData);
    res.render("dashboard", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET /dashboard/newPost
router.get("/newPost", async (req, res) => {
  res.render("create-post", { logged_in: req.session.logged_in });
});

// GET /dashboard/editPost
router.get("/editPost", async (req, res) => {
  console.log("edit post now, req: ", req.body.id);
  try {
    const postsData = await Post.findOne({
      where: {
        id: req.session.id,
      },
      include: {
        model: User,
        attributes: ["id", "username"],
      },
    });
    //console.log(postsData);
    const posts = postsData.map((post) => post.get({ plain: true }));
    //console.table(posts);
    res.render("edit-post", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
