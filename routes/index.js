const express = require("express");
const router = express.Router();

// import Post Model
const Post = require("../models/Post");

//Home route - Gets all posts
router.get("/", (req, res) => {
  //Find all posts in database
  Post.find({}).then((posts) => {
    //Return home view along side posts
    res.render("home", { posts: posts });
  });
});

//Get single Post
router.get("/post/:id", (req, res) => {
  //Find post by Id in url
  Post.findById(req.params.id).then((post) => {
    res.render("singlepost", { post: post });
  });
});

//Create post page
router.get("/createpost", (req, res) => {
  res.render("createpost");
});

//Create post
router.post("/createpost", (req, res) => {
  const { title, body } = req.body;
  const newPost = new Post({
    title,
    body,
  });

  newPost
    .save()
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
