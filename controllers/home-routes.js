const router = require("express").Router();
const Posts = require("../models/Posts");
const User = require("../models/User");
const withAuth = require("../utils/auth");

// route to get all posts
router.get("/", withAuth, async (req, res) => {
  console.log(req.session.logged_in);
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
    res.render("home", { posts });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("signup");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
