import express from "express";
import { commentController } from "./comment.controller.js";
// import { upload } from "../../middleware/fileUpload.middleware.js";

const commentRouter = express.Router();

const commentControllers = new commentController();
//localhost:3200/api/cartItems?productId=1&quantity=2
commentRouter.get("/:id", commentControllers.getAllComments);
commentRouter.post("/:id", commentControllers.addNewComment);
commentRouter.delete("/:id", commentControllers.deleteComment);

commentRouter.put("/:id", commentControllers.updateComment);

export default commentRouter;
