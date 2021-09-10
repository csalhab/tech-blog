const router = require("express").Router();
const Post = require("../../models/Post");

// GET /api/posts
// route to handle "+ New Post" button to load partial
router.get("/", (req, res) => {
  res.render("partials/create-post");
});

// POST /api/posts
// route to create/add a new post
router.post("/", async (req, res) => {
  console.log(
    "hit /api/posts POST route to create/add a new post, data: ",
    req.body
  );
  try {
    const postsData = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json(postsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
