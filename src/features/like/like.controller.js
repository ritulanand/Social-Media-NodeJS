import {
  findLikesByPostId,
  findLike,
  removeLike,
  addLike,
  getallikes,
} from "./like.model.js";

// GET /likes/:postId
export class likeController {
  getLikesForPost(req, res) {
    const postId = req.params.id;
    console.log("post id", postId);
    const likes = findLikesByPostId(postId);
    console.log("likes", likes);
    res.json(likes);
  }

  // GET /toggle/:postId

  toggleLikeForPost(req, res) {
    const postId = req.params.id;
    const userId = req.userID; // Assuming user is authenticated and userId is available in req.user
    console.log("userid like", userId);
    const existingLike = findLike(postId, userId);
    console.log("existing like", existingLike);
    if (existingLike) {
      removeLike(postId, userId);
      res.json({ message: "Like removed" });
    } else {
      addLike(postId, userId);
      res.json({ message: "Like added" });
    }
  }

  getallLikes(req, res) {
    // res.json({ message: "hi" });
    const items = getallikes();
    // console.log("res", res.send("like"));
    // console.log("get all likes", items);
    return res.status(200).send(items);
  }

  // addd likes

  // addNewLikes(req, res) {
  //   const postId = Number(req.params.id);
  //   console.log("post is add like", postId);
  //   const { content } = req.body;
  //   console.log("content", req.body);
  //   const post = postModel.getall();
  //   console.log("post", post);
  //   const postidindex = post.find((item) => {
  //     console.log("item>>>>", item.postId, item.postId === postId);
  //     return item.postId === postId;
  //   });
  //   console.log("post id >>>>", postidindex);
  //   if (postidindex) {
  //     // console.log("item post id add", item.postId, postId);
  //     let newComment = commentModel.add(postId, req.userID, content);
  //     console.log("newcomment", newComment);
  //     return res.status(201).json(newComment);
  //   } else {
  //     // console.log("item post else", item.postId);
  //     return res.status(401).json({ message: "Post not found" });
  //   }
  // }
}
