const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model("Post", postSchema);

const samplePost = new Post({
  title: "This is a sample post",
  body:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore, saepe earum cupiditate reiciendis, quo nesciunt sunt ab dicta veritatis dolor id. In ratione ipsa sunt deleniti laboriosam. Ipsa, nostrum?",
});

// samplePost
//   .save()
//   .then(() => console.log("new Post Created"))
//   .catch((err) => console.log(err));

module.exports = Post;
