const router = require("express").Router();
const Posts = require("../../models/Posts");

// route to handle "+ New Post" button to load partial
router.get("/", (req, res) => {
  res.render("partials/create-post");
});

// route to create/add a post
router.post("/", async (req, res) => {
  try {
    const postsData = await Posts.create({
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
    const post = await Posts.update(
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
