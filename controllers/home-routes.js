const router = require("express").Router();
const { Post, User } = require("../models");

// home-routes are just the views for:
// GET /
// route to get all posts to be displayed on / home.handlebars view
router.get("/", async (req, res) => {
  try {
    // these are all attempts from Deep helping:
    // const postsData = await Post.findAll({
    //   where: { user_id: 3 },
    // });
    // const postsData = await Post.findAll({
    //   include: [{ model: User, required: true, as: "username" }],
    // });
    //const postsData = await User.findAll({ include: Post });
    // const postsData = await Post.findAll({
    //   attributes: {
    //     include: [
    //       sequelize.literal(
    //         "(select user.id from user where posts.user_id = user.id)"
    //       ),
    //       "userID",
    //     ],
    //   },
    // });
    //const user = await User.findAll({ include: Post });
    //const postsData = await Post.findAll({ include: User });
    const postsData = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "username"],
      },
    });
    const posts = postsData.map((post) => post.get({ plain: true }));
    console.table(posts);
    //res.render("home", { posts, logged_in: req.session.logged_in });
    res.render("home", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// home-routes are just the views for:
// GET /login
// route if logged_in true redirect to / which is homepage which is just home.handlebars view, and if logged_in false display login.handlebars view
router.get("/login", (req, res) => {
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

// home-routes are just the views for:
// GET /signup
// route is /signup which is just to display signup.handlebars view when called to do so
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
