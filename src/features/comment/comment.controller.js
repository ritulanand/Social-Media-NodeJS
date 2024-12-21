import commentModel from "./comment.model.js";
import postModel from "../post/post.model.js";

export class commentController {
  getAllComments(req, res) {
    const userID = req.userID;
    const postId = req.params.id;
    console.log("user id comment", userID);
    const items = commentModel.getAllComment(userID, postId);
    return res.status(200).send(items);
  }
  addNewComment(req, res) {
    const postId = Number(req.params.id);
    console.log("post is add comment", postId);
    const { content } = req.body;
    console.log("content", req.body);
    const post = postModel.getall();
    console.log("post", post);
    const postidindex = post.find((item) => {
      console.log("item>>>>", item.postId, item.postId === postId);
      return item.postId === postId;
    });
    console.log("post id >>>>", postidindex);
    if (postidindex) {
      // console.log("item post id add", item.postId, postId);
      let newComment = commentModel.add(postId, req.userID, content);
      console.log("newcomment", newComment);
      return res.status(201).json(newComment);
    } else {
      // console.log("item post else", item.postId);
      return res.status(401).json({ message: "Post not found" });
    }
  }

  updateComment(req, res) {
    const commentId = req.params.id;
    const userID = req.userID;
    const { postId, content } = req.body;
    const item = commentModel.updatecomment(postId, userID, content, commentId);
    console.log(item);
    if (!item) {
      return res.status(400).send("Uff sorry, comment Not Found !!");
    } else {
      return res.status(200).send(item);
    }
  }
  deleteComment(req, res) {
    const userID = req.userID;
    const commentId = req.params.id;
    const error = commentModel.delete(commentId, userID);
    if (error) {
      return res.status(404).send(error);
    }
    return res.status(200).send("comment Item is removed");
  }
}
